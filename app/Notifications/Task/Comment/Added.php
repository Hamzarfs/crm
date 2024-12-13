<?php

namespace App\Notifications\Task\Comment;

use App\Http\Resources\Tasks\TaskCommentResource;
use App\Models\TaskComment;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;

class Added extends Notification
{
    /**
     * Create a new notification instance.
     */
    public function __construct(
        private TaskComment $taskComment
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
            'comment_id' => $this->taskComment->id,
        ];
    }

    /**
     * Get the notification's database type.
     *
     * @return string
     */
    public function databaseType(): string
    {
        return 'task.comment.added';
    }

    /**
     * Get the broadcastable representation of the notification.
     */
    public function toBroadcast(): BroadcastMessage
    {
        return new BroadcastMessage([
            'comment' => new TaskCommentResource($this->taskComment),
            'isSeen' => false,
            'created_at' => $this->taskComment->created_at, // as task & notification are created at almost the same time
        ]);
    }

    /**
     * Get the channel the event should broadcast on.
     */
    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel(sprintf(
            "Task.Comment.Added.%s",
            $this->taskComment->createdBy->is($this->taskComment->task->creator) ?
                $this->taskComment->task->assignee->id :
                $this->taskComment->task->creator->id
        ));
    }

    /**
     * Get the type of the notification being broadcast.
     */
    public function broadcastType(): string
    {
        return 'task.comment.added';
    }
}
