<?php

namespace App\Http\Controllers;

use App\Http\Resources\Notifications\Tasks\Assigned;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function all()
    {
        $notifications = Auth::user()->notifications->map(function ($notification) {
            // For task assigned notifications
            if ($notification->type === 'task.assigned') {
                $task = Task::find($notification->data['task_id'])->load(['assignee', 'creator']);
                if ($task->assignee->is(Auth::user())) {
                    $task->isSeen = !is_null($notification->read_at);
                    return [
                        'id' => $notification->id,
                        'type' => $notification->type,
                        'task' => new Assigned($task),
                        'isSeen' => !is_null($notification->read_at),
                        'created_at' => $notification->created_at,
                    ];
                }
            }
        });
        return response()->json([
            'notifications' => $notifications
        ]);
    }

    public function markNotifcationsAsRead(Request $request) {}
    public function markNotifcationsAsUnread(Request $request) {}
}
