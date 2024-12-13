<?php

namespace App\Http\Resources\Notifications\Tasks;

use App\Http\Resources\Collections\Tasks\TaskCommentResourceCollection;
use App\Http\Resources\Collections\Tasks\TaskFileResourceCollection;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class Assigned extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'deadline' => $this->deadline,
            'status' => $this->status,
            'assignee' => $this->whenLoaded('assignee', new UserResource($this->assignee)),
            'creator' => $this->whenLoaded('creator', new UserResource($this->creator)),
            'files' => $this->whenLoaded('files', new TaskFileResourceCollection($this->files)),
            'comments' => $this->whenLoaded('comments', new TaskCommentResourceCollection($this->comments)),
            'created_at' => $this->created_at->format('d M Y, g:i A'),
            'updated_at' => $this->updated_at->format('d M Y, g:i A'),
        ];
    }
}
