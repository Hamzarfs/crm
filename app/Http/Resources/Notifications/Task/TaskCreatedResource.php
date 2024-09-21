<?php

namespace App\Http\Resources\Notifications\Task;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskCreatedResource extends JsonResource
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
            'assignee' => $this->assigned_to,
            'created_at' => $this->created_at,
            'creator' => $this->whenLoaded('creator', $this->creator->name)
        ];
    }
}
