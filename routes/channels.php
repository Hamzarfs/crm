<?php

use App\Broadcasting\Task\Assigned as TaskAssigned;
use Illuminate\Support\Facades\Broadcast;



Broadcast::routes(['middleware' => ['auth:sanctum']]);

Broadcast::channel('Task.Assigned.{assignedTo}', TaskAssigned::class);
