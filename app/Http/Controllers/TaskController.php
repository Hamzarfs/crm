<?php

namespace App\Http\Controllers;

use App\Http\Requests\Task\{Store, Update, Comment\Store as CommentStore};
use App\Http\Resources\{Tasks\TaskCommentResource, Collections\Tasks\TaskResourceCollection};
use App\Models\{Task, TaskComment, TaskFile};
use App\Notifications\Task\Assigned as TaskAssigned;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function list(Request $request)
    {
        
        $page = (int) $request->input('page', 1);
        $itemsPerPage = (int) $request->input('itemsPerPage', 10);

        $departments = $request->input('departments');
        $users = $request->input('users');
        $statuses = $request->input('statuses');
        $date = $request->input('date');
        $assignedToMe = $request->input('assignedToMe');
        $query = $request->input('q');

        $orderByColumn = $request->input('sortBy');
        $orderByDir = $request->input('orderBy');

        $tasks = Task::with(['files', 'creator', 'assignee.department', 'comments.files']);

        if (!$request->user()->hasRole('admin')) {
            if ($request->user()->hasRole('team_lead') || $request->user()->hasRole('project_manager')) {
                $tasks->where(
                    fn($query) => $query->where('created_by', Auth::id())
                        ->orWhere('assigned_to', Auth::id())
                );
            } else {
                $tasks->where('assigned_to', Auth::id());
            }
        }
        

        // Applying DT filters
        $tasks = $tasks->when(
            value: $departments,
            callback: fn(Builder $tasksQuery, array $departments) => $tasksQuery->whereRelation(
                'assignee',
                fn($assigneeQuery) => $assigneeQuery->whereRelation('department', fn($assigneeDepartmentQuery) => $assigneeDepartmentQuery->whereIn('name', $departments))
            )
        )->when(
            value: $users,
            callback: fn(Builder $tasksQuery, array $users) => $tasksQuery->where(
                fn($tasksSubQuery) => $tasksSubQuery->whereIn('created_by', $users)->orWhereIn('assigned_to', $users)
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
            value: $statuses,
            callback: fn(Builder $tasksQuery, array $status) => $tasksQuery->whereIn('status', $status)
        )->when(
            value: $assignedToMe,
            callback: fn(Builder $tasksQuery, $assignedToMe) => $assignedToMe === 'yes' ? $tasksQuery->where('assigned_to', Auth::id()) : $tasksQuery->where('created_by', Auth::id()),
        )->when(
            value: $query,
            callback: fn(Builder $tasksQuery, $query) => $tasksQuery->where(
                column: [
                    ['title', 'LIKE', "%$query%"],
                    ['description', 'LIKE', "%$query%"],
                ],
                boolean: 'OR'
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
     * Get Tasks for kanban view
     */
    public function kanbanList()
    {
        $assignedToMe = request()->input('assignedToMe');

        $statuses = ['to_do','in_progress', 'pending','sent_to_client_review','revisions',  'completed','submit_to_client','archive'];

        $tasksQuery = Task::with(['files', 'creator', 'assignee.department', 'comments.files']);

        $tasksQuery->when(
            value: $assignedToMe,
            callback: fn(Builder $tasksQuery, $assignedToMe) => $assignedToMe === 'yes' ? $tasksQuery->where('assigned_to', Auth::id()) : $tasksQuery->where('created_by', Auth::id()),
        );

        if (!request()->user()->hasRole('admin')) {
            if (request()->user()->hasRole('team_lead')) {
                $tasksQuery->where(function ($query) {
                    $query->where('created_by', Auth::id())
                        ->orWhere('assigned_to', Auth::id());
                });
            } else {
                $tasksQuery->where('assigned_to', Auth::id());
            }
        }

        $tasksByStatus = $tasksQuery->get()->groupBy('status');

        $formattedTasks = collect($statuses)->mapWithKeys(fn($status) => [$status => new TaskResourceCollection($tasksByStatus->get($status, []))]);

        return response()->json([
            'tasksByStatus' => $formattedTasks,
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

        if ($request->hasFile('files')) {
            foreach ($data->files as $file) {
                $filePath = $file->store('tasks');
                $task->files()->create([
                    'type' => 'task',
                    'file' => $filePath,
                    'uploaded_by' => $request->user()->id,
                ]);
            }
        }

        $task->load(['files', 'creator', 'assignee.department', 'comments.files']);
        Notification::send($task->assignee, new TaskAssigned($task));

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

        $previousAssignee = $task->assignee;

        $task->update([
            'title' => $data->title,
            'description' => $data->description,
            'deadline' => Carbon::createFromFormat('d-m-Y', $data->deadline)->format('Y-m-d'),
            'status' => $data->status,
            'assigned_to' => $data->assigned_to,
        ]);

        $task->load(['files', 'creator', 'assignee.department', 'comments.files']);
        if (!$task->assignee->is($previousAssignee)) {
            Notification::send($task->assignee, new TaskAssigned($task));
        }

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
        DatabaseNotification::where('data->task_id', $task->id)->delete();
        $task->comments()->delete();
        $task->files()->delete();
        $task->delete();
        return response()->json([
            'success' => true,
            'message' => 'Task deleted successfully!'
        ]);
    }

    /**
     * Download the specified file.
     */
    public function downloadFile(TaskFile $taskFile)
    {
        return Storage::download($taskFile->file);
    }

    /**
     * Add a comment to the specified task.
     */
    public function addComment(CommentStore $request, Task $task)
    {
        $data = (object) $request->validated();

        $comment = $task->comments()->createQuietly([
            'comment' => $data->comment,
            'created_by' => Auth::id(),
        ]);

        if ($request->hasFile('files')) {
            foreach ($data->files as $file) {
                $filePath = $file->store('tasks/comments');
                $comment->files()->create([
                    'type' => 'comment',
                    'file' => $filePath,
                    'uploaded_by' => Auth::id(),
                ]);
            }
        }

        $comment->save();

        return response()->json([
            'success' => true,
            'message' => 'Comment added successfully',
            'comment' => new TaskCommentResource($comment),
        ]);
    }

    /**
     * Update the status of the specified task.
     */
    public function updateStatus(Request $request, Task $task)
    {
        $task->update(['status' => $request->input('status')]);
        return response()->json([
            'success' => true,
            'message' => 'Task status updated successfully',
        ]);
    }

    /**
     * Delete the comment of the specified task
     */
    public function deleteComment(TaskComment $taskComment)
    {
        $taskComment->files()->delete();
        $taskComment->delete();
        return response()->json([
            'success' => true,
            'message' => 'Task comment deleted successfully!'
        ]);
    }
}
