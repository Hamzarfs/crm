<?php

namespace App\Broadcasting\Task;

use App\Models\User;

class Assigned
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
    public function join(User $user, User $assignedTo): array|bool
    {
        return $user->is($assignedTo);
    }
}
