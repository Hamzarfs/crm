<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Notifications\Task\Comment\Added as TaskCommentAdded;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class TaskComment extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    public function files()
    {
        return $this->hasMany(TaskFile::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    // protected static function booted()
    // {
    //     // static::saved(fn(self $taskComment) => dd($taskComment->load(['files', 'task'])->toArray()));
    //     static::saved(function (self $taskComment) {
    //         $taskComment->load(['files', 'createdBy', 'task.assignee', 'task.creator', 'task.files']);

    //         // User::query()->department('admin')->role('admin')->get()->map(function (User $adminUser) use ($taskComment) {
    //         //     if ($adminUser->isNot($taskComment->task->creator) && $adminUser->isNot($taskComment->createdBy)) {
    //         //         Log::info(sprintf('not admin %s', $adminUser->name));
    //         //         $adminUser->notify(new TaskCommentAdded($taskComment));
    //         //     }
    //         // });


    //         // if ($taskComment->createdBy->is($taskComment->task->creator)) {
    //         //     $taskComment->task->assignee->notify(new TaskCommentAdded($taskComment));

    //         //     Log::info(sprintf('notifying the assignee'));
    //         // } else {

    //         //     Log::info(sprintf('notifying the creator %s', $taskComment->task->creator->name));
    //         //     $taskComment->task->creator->notify(new TaskCommentAdded($taskComment));
    //         // }

    //         if ($taskComment->createdBy->is($taskComment->task->creator)) {
    //             // Notify assignee only
    //             Log::info(sprintf('Notifying the assignee: %s', $taskComment->task->assignee->name));
    //             $taskComment->task->assignee->notify(new TaskCommentAdded($taskComment));
    //         } elseif ($taskComment->createdBy->is($taskComment->task->assignee)) {
    //             // Notify creator only
    //             Log::info(sprintf('Notifying the creator: %s', $taskComment->task->creator->name));
    //             $taskComment->task->creator->notify(new TaskCommentAdded($taskComment));
    //         }



    //         // Notification::send(
    //         //     [
    //         //         $comment->createdBy->is($comment->task->creator) ?
    //         //             $comment->task->assignee :
    //         //             $comment->task->creator,
    //         //         ...User::role('admin')->department('admin')->get(),
    //         //     ],
    //         //     new TaskCommentAdded($comment)
    //         // );


    //         // dd(Auth::user()->hasRole('admin') ?
    //         //     Auth::user() : (
    //         //         $comment->createdBy->is($comment->task->creator) ?
    //         //         $comment->task->assignee :
    //         //         $comment->task->creator
    //         //     ));

    //         // Notification::send(
    //         //     Auth::user()->hasRole('admin') ?
    //         //         Auth::user() : (
    //         //             $comment->createdBy->is($comment->task->creator) ?
    //         //             $comment->task->assignee :
    //         //             $comment->task->creator
    //         //         ),
    //         //     new TaskCommentAdded($comment)
    //         // );

    //         // Notification::send(
    //         //     [
    //         //         ...User::role('admin')->department('admin')->get(),
    //         //         $comment->task->assignee,
    //         //         $comment->task->creator,
    //         //     ],
    //         //     new TaskCommentAdded($comment)
    //         // );

    //         // Notification::send(
    //         //     Auth::user()->hasRole('admin') ?
    //         //         Auth::user() : (
    //         //             $comment->createdBy->is($comment->task->creator) ?
    //         //             $comment->task->assignee :
    //         //             $comment->task->creator
    //         //         ),
    //         //     new TaskCommentAdded($comment)
    //         // );


    //     });
    // }
}
