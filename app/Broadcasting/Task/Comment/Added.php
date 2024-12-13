<?php

namespace App\Broadcasting\Task\Comment;

use App\Models\Task;
use App\Models\User;

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
    public function join(User $user, Task $task): bool
    {
        $task->load(['creator', 'assignee']);
        return $user->is($task->assignee) || $user->is($task->creator);
    }
}
