<?php

namespace App\Http\Resources\Email;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Webklex\PHPIMAP\Message;

class EmailResource extends JsonResource
{
    public $resource = Message::class;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->getUid(),
            // 'from' => ''
        ];
    }
}
