<?php

namespace App\Notifications\Tasks;

use App\Http\Resources\Notifications\Task\TaskCreatedResource;
use App\Models\Task;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;

class Created extends Notification
{
    use InteractsWithSockets;
    /**
     * Create a new notification instance.
     */
    public function __construct(private Task $task) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(): array
    {
        return ['database'];
        // return ['broadcast', 'database'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toDatabase(): array
    {
        return [
            'task' => new TaskCreatedResource($this->task),
        ];
    }

    /**
     * Get the notification's database type.
     *
     * @return string
     */
    public function databaseType(): string
    {
        return 'task-created';
    }

    /**
     * Get the broadcastable representation of the notification.
     */
    // public function toBroadcast(): BroadcastMessage
    // {
    //     return new BroadcastMessage([
    //         'task' => new TaskCreatedResource($this->task),
    //     ]);
    // }

    /**
     * Get the channel the event should broadcast on.
     */
    // public function broadcastOn(): Channel
    // {
    //     return new PrivateChannel("Task.Created.{$this->task->assigned_to}");
    // }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    // public function toArray(object $notifiable): array
    // {
    //     $notifiable->load(['assignee', 'creator']);
    //     return [
    //         'task' => new TaskResource($notifiable)
    //     ];
    // }
}
