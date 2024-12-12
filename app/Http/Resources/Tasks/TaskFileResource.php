<?php

namespace App\Http\Resources\Tasks;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskFileResource extends JsonResource
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
            'file' => $this->file,
            'type' => $this->type,
            'uploader' => $this->whenLoaded('uploadedBy', new UserResource($this->uploadedBy)),
            'created_at' => $this->created_at->format('d M Y, g:i A'),
            'updated_at' => $this->updated_at->format('d M Y, g:i A'),
        ];
    }
}
