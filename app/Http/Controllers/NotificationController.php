<?php

namespace App\Http\Controllers;

use App\Http\Resources\Tasks\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function all()
    {
        $notifications = Auth::user()->notifications->map(function ($notification) {
            // For task assigned notifications
            if ($notification->type === 'task.assigned') {
                $task = Task::find($notification->data['task_id'])?->load(['assignee', 'creator']);
                if ($task && $task->assignee->is(Auth::user())) {
                    $task->isSeen = !is_null($notification->read_at);
                    return [
                        'id' => $notification->id,
                        'type' => $notification->type,
                        'task' => new TaskResource($task),
                        'isSeen' => !is_null($notification->read_at),
                        'created_at' => $notification->created_at,
                    ];
                }
            }
        })->filter()->values();
        return response()->json([
            'notifications' => $notifications
        ]);
    }

    public function markNotifcationsAsRead(Request $request)
    {
        $ids = $request->post('ids');

        DatabaseNotification::whereIn('id', $ids)->get()->markAsRead();

        return response()->json([
            'success' => true,
            'message' => 'Notification(s) marked as read'
        ]);
    }
    public function markNotifcationsAsUnread(Request $request)
    {
        $ids = $request->post('ids');

        DatabaseNotification::whereIn('id', $ids)->get()->markAsUnread();

        return response()->json([
            'success' => true,
            'message' => 'Notification(s) marked as unread'
        ]);
    }
}
