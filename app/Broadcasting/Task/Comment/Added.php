<?php

namespace App\Broadcasting\Task\Comment;

use App\Models\Task;
use App\Models\User;
use App\Notifications\Task\Comment\Added as CommentAdded;
use Illuminate\Support\Facades\Log;

class Added
{
    /**
     * Create a new channel instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Authenticate the user's access to the channel.
     */
    public function join(User $user, Task $task/*, CommentAdded $added*/): bool
    {
        // Log::info('$added');
        // Log::info($added);
        $task->load(['creator', 'assignee']);
        return $user->hasRole('admin') || $user->is($task->assignee) || $user->is($task->creator);
    }
}
