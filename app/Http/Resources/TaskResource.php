<?php

namespace App\Http\Resources;

use App\Http\Resources\Collections\TaskCommentResourceCollection;
use App\Http\Resources\Collections\TaskFileResourceCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class TaskResource extends JsonResource
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
            'assigned_to' => $this->whenLoaded('assignee', new UserResource($this->assignee)),
            'created_by' => $this->whenLoaded('creator', new UserResource($this->creator)),
            'files' => $this->whenLoaded('files', new TaskFileResourceCollection($this->files)),
            'comments' => $this->whenLoaded('comments', new TaskCommentResourceCollection($this->comments)),
            'created_at' => $this->created_at->format('d M Y, g:i A'),
            'updated_at' => $this->updated_at->format('d M Y, g:i A'),
        ];
    }
}
