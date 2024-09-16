<?php

namespace App\Http\Controllers;

use App\Http\Requests\Task\{Store, Update};
use App\Http\Resources\Collections\TaskResourceCollection;
use App\Models\Task;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function list(Request $request)
    {
        $page = (int) $request->input('page', 1);
        $itemsPerPage = (int) $request->input('itemsPerPage', 10);

        $department = $request->input('department');
        $user = $request->input('user');
        $date = $request->input('date');
        $assignedToMe = $request->input('assignedToMe');
        $status = $request->input('status');
        $query = $request->input('q');

        $orderByColumn = $request->input('sortBy');
        $orderByDir = $request->input('orderBy');

        $tasks = Task::with(['files', 'creater.department', 'assignee', 'comments']);

        if (!$request->user()->hasRole('admin')) {
            if ($request->user()->hasRole('team_lead'))
                $tasks = $tasks->where([
                    ['created_by', '=', Auth::id(), 'OR'],
                    ['assigned_to', '=', Auth::id(), 'OR'],
                ]);
            else
                $tasks = $tasks->where('assigned_to', Auth::id());
        }

        // Applying DT filters
        $tasks = $tasks->when(
            value: $department,
            callback: fn(Builder $tasksQuery, $department) => $tasksQuery->whereRelation('creater', 'department_id', '=', $department)
        )->when(
            value: $user,
            callback: fn(Builder $tasksQuery, $user) => $tasksQuery->where(
                column: [
                    ['created_by', '=', $user, 'OR'],
                    ['assigned_to', '=', $user, 'OR'],
                ],
            )
        )->when(
            value: $date,
            callback: function (Builder $tasksQuery, $date) {
                $formattedDate = Carbon::createFromFormat('d-m-Y', $date);
                return $tasksQuery->where(fn($q) => $q->whereDate('deadline', '=', $formattedDate)
                    ->orWhereDate('completed_at', '=', $formattedDate)
                    ->orWhereDate('started_at', '=', $formattedDate)
                    ->orWhereDate('created_at', '=', $formattedDate)
                    ->orWhereDate('updated_at', '=', $formattedDate));
            }
        )->when(
            value: $status,
            callback: fn(Builder $tasksQuery, $status) => $tasksQuery->where('status', $status)
        )->when(
            value: $assignedToMe,
            callback: fn(Builder $tasksQuery, $assignedToMe) => $assignedToMe === 'yes' ? $tasksQuery->where('assigned_to', Auth::id()) : $tasksQuery->where('created_by', Auth::id()),
        )->when(
            value: $query,
            callback: fn(Builder $tasksQuery, $query) => $tasksQuery->where(
                column: [
                    ['title', 'LIKE', "%$query%", 'OR'],
                    ['description', 'LIKE', "%$query%", 'OR'],
                ],
            )
        )->when(        // Apply ordering
            value: fn() => (!is_null($orderByColumn) && !is_null($orderByDir)) ? ['column' => $orderByColumn, 'dir' => $orderByDir] : null,
            callback: fn(Builder $tasksQuery, array $orderBy) => $tasksQuery->orderBy($orderBy['column'], $orderBy['dir'])
        );

        // Apply pagination
        $paginatedTasks = $tasks->paginate($itemsPerPage, page: $page);
        $currentPage = $paginatedTasks->currentPage();
        $lastPage = $paginatedTasks->lastPage();
        $total = $paginatedTasks->total();

        $tasks = new TaskResourceCollection($paginatedTasks);

        return response()->json([
            'tasks' => $tasks,
            'totalTasks' => $total,
            'page' => ($currentPage <= $lastPage) ? $currentPage : $lastPage,
            'totalPages' => $lastPage,
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = (object) $request->validated();

        $task = Task::create([
            'title' => $data->title,
            'description' => $data->description,
            'deadline' => Carbon::createFromFormat('d-m-Y', $data->deadline)->format('Y-m-d'),
            'status' => $data->status,
            'assigned_to' => $data->assigned_to,
            'created_by' => $request->user()->id,
        ]);

        foreach ($data->files as $file) {
            $filePath = $file->store('tasks');
            $task->files()->create([
                'type' => 'task',
                'file' => $filePath,
                'uploaded_by' => $request->user()->id,
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Task created successfully',
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Task $task)
    {
        $data = (object) $request->validated();

        $task->update([
            'title' => $data->title,
            'description' => $data->description,
            'deadline' => Carbon::createFromFormat('d-m-Y', $data->deadline)->format('Y-m-d'),
            'status' => $data->status,
            'assigned_to' => $data->assigned_to,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Task updated successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Task $task)
    {
        $task->comments()->delete();
        $task->files()->delete();
        $task->delete();
        return response()->json([
            'success' => true,
            'message' => 'Task deleted successfully!'
        ]);
    }
}
