<?php

namespace App\Http\Resources;

use App\Enums\RolesEnum;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'roles' => $this->whenLoaded('roles', function () {
                return $this->roles->map(function ($role) {
                    $roleEnum = RolesEnum::from($role->name);
                    return [
                        'name' => $roleEnum->value,
                        'label' => $roleEnum->label(),
                    ];
                });
            }),
            'created_at' => $this->created_at->format('d-m-Y H:i:s A'),
            'updated_at' => $this->updated_at->format('d-m-Y H:i:s A'),
        ];
    }
}
