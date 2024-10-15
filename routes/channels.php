<?php

use App\Broadcasting\Task\Created;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

// Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
//     return (int) $user->id === (int) $id;
// });

// Broadcast::channel('Example-channel', fn() => true);

Broadcast::channel('Task.Assigned.{assignedTo}', Created::class);
