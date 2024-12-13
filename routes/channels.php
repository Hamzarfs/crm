<?php

use App\Broadcasting\Task\Assigned as TaskAssigned;
use App\Broadcasting\Task\Comment\Added as TaskCommentAdded;
use Illuminate\Support\Facades\Broadcast;



Broadcast::routes(['middleware' => ['auth:sanctum']]);

Broadcast::channel('Task.Assigned.{assignedTo}', TaskAssigned::class);

Broadcast::channel('Task.Comment.Added.{task}', TaskCommentAdded::class);
