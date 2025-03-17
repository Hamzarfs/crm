<?php

namespace App\Http\Resources\Collections\Tasks;

use App\Http\Resources\Tasks\TaskCommentResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TaskCommentResourceCollection extends ResourceCollection
{
    /**
     * The resource that this resource collects.
     *
     * @var string
     */
    public $collects = TaskCommentResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            ...$this->collection->map(fn(TaskCommentResource $commentResource) => $commentResource->toArray($request)),
        ];
    }
}
