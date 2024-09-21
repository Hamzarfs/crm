<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function all()
    {
        return response()->json([
            'notifications' => [
                ...$this->getTaskCreatedNotifications()
            ]
        ]);
    }

    public function getTaskCreatedNotifications(string $type = 'task-created')
    {
        return DatabaseNotification::where('type', $type)->get()->map(
            function ($notification) {
                $task = $notification->data['task'];
                if ($task['assignee'] == Auth::id()) {
                    $task['isSeen'] = !is_null($notification->read_at);
                    $task['time'] = Carbon::make($task['created_at'])->diffForHumans();
                    return $task;
                }
            }
        )->filter()->all();
    }
}
