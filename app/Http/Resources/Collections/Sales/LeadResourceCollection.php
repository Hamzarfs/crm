<?php

namespace App\Http\Resources\Collections\Sales;

use App\Http\Resources\Sales\LeadResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class LeadResourceCollection extends ResourceCollection
{
    /**
     * The resource that this resource collects.
     *
     * @var string
     */
    public $collects = LeadResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            ...$this->collection->map(fn(LeadResource $leadResource) => $leadResource->toArray($request)),
        ];
    }
}
