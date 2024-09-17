<?php

namespace App\Http\Resources;

use App\Http\Resources\Collections\TaskFileResourceCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskCommentResource extends JsonResource
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
            'comment' => $this->comment,
            'files' => $this->whenLoaded('files', new TaskFileResourceCollection($this->files)),
            'created_by' => $this->whenLoaded('createdBy', new UserResource($this->createdBy)),
            'created_at' => $this->created_at->format('d M Y, g:i A'),
            'updated_at' => $this->updated_at->format('d M Y, g:i A'),
        ];
    }
}
