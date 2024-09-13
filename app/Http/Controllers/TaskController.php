<?php

namespace App\Http\Controllers;

use App\Http\Requests\Task\Store;
use App\Http\Resources\TaskResource;
use App\Http\Resources\Collections\TaskResourceCollection;
use App\Models\Task;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Builder as QueryBuilder;
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
        $status = $request->input('status');
        $query = $request->input('q');

        $orderByColumn = $request->input('sortBy');
        $orderByDir = $request->input('orderBy');

        $tasks = Task::with(['files', 'creater.department', 'assignee', 'comments']);

        if (!$request->user()->hasRole('admin')) {
            if ($request->user()->hasRole('team_lead'))
                $tasks = $tasks->where('created_by', Auth::id());
            else
                $tasks = $tasks->where('assigned_to', Auth::id());
        }

        // Applying DT filters
        $tasks = $tasks->when(
            value: $department,
            callback: fn(Builder $tasksQuery, $department) => $tasksQuery->whereRelation('createdBy', 'department_id', '=', $department)
        )->when(
            value: $user,
            callback: fn(Builder $tasksQuery, $user) => $tasksQuery->where(
                column: [
                    ['created_by' => $user],
                    ['assigned_to' => $user],
                ],
                boolean: 'OR',
            )
        )->when(
            value: $date,
            callback: function (QueryBuilder $tasksQuery, $date) {
                $formattedDate = Carbon::createFromFormat('d-m-Y', $date);
                return $tasksQuery->whereDate('deadline', '=', $formattedDate, 'OR')
                    ->whereDate('completed_at', '=', $formattedDate, 'OR')
                    ->whereDate('started_at', '=', $formattedDate, 'OR')
                    ->whereDate('created_at', '=', $formattedDate, 'OR')
                    ->whereDate('updated_at', '=', $formattedDate, 'OR');
            }
        )->when(
            value: $status,
            callback: fn(Builder $tasksQuery, $status) => $tasksQuery->where('status', $status)
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
        // dd($tasks);

        return response()->json([
            'tasks' => $tasks,
            'totalTasks' => $total,
            'page' => ($currentPage <= $lastPage) ? $currentPage : $lastPage,
            'totalPages' => $lastPage,
        ]);










        // $tasks = $tasks->when(
        //     value: $department,
        //     callback: fn(Builder $query, $department) => $query->whereHas('createdBy', function($q) use ($department) {
        //         $q->where('department_id', $department);
        //     })
        // );















        // dd($tasks->all(), $tasks->all()->count());

        // if ($request->user()->hasRole('admin')) {
        //     $tasks = $tasks
        // }else if ($request->user()->hasRole('team_lead')) {
        // }else if ($request->user()->hasRole('team_lead')) {
        // }
        // if ($request->user()->hasRole('admin')) {
        //     $tasks = $tasks
        // }






        // $tasks = $tasks->when(
        //     value: $department,
        //     callback: function ($query, $department) {
        //         return $query->where('department_id', $department);
        //     }
        // );







        // $tasks = Task::with(['files', 'createdBy.department', 'assignedTo', 'comments']);
        // // dd($tasks->get()->toArray());
        // if (request()->user()->hasRole('admin')) {
        //     $tasks = $tasks->get();
        // } else if (request()->user()->hasRole('team_lead')) {
        //     $tasks = $tasks->where('created_by', Auth::id())->get();
        // } else {
        //     $tasks = $tasks->where('assigned_to', Auth::id())->get();
        // }





        // return response()->json([
        //     'tasks' => new TaskResourceCollection($tasks),
        // ]);
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
            'deadline' => Carbon::createFromFormat('d/m/Y', $data->deadline)->format('Y-m-d'),
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
            'task' => new TaskResource($task->load(['files', 'createdBy', 'assignedTo'])),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        //
    }
}
