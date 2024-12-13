<?php

namespace App\Notifications\Task;

use App\Http\Resources\Notifications\Tasks\Assigned as TaskAssigned;
use App\Models\Task;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;

class Assigned extends Notification
{
    /**
     * Create a new notification instance.
     */
    public function __construct(
        private Task $task
    ) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(): array
    {
        return ['broadcast', 'database'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toDatabase(): array
    {
        return [
            'task_id' => $this->task->id,
        ];
    }

    /**
     * Get the notification's database type.
     *
     * @return string
     */
    public function databaseType(): string
    {
        return 'task.assigned';
    }

    /**
     * Get the broadcastable representation of the notification.
     */
    public function toBroadcast(): BroadcastMessage
    {
        return new BroadcastMessage([
            'task' => new TaskAssigned($this->task),
            'isSeen' => false,
            'created_at' => $this->task->created_at, // as task & notification are created at almost the same time
        ]);
    }

    /**
     * Get the channel the event should broadcast on.
     */
    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel("Task.Assigned.{$this->task->assigned_to}");
    }

    /**
     * Get the type of the notification being broadcast.
     */
    public function broadcastType(): string
    {
        return 'task.assigned';
    }
}
