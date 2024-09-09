<?php

namespace App\Http\Resources;

use App\Enums\DepartmentsEnum;
use App\Enums\EmployeeStatusesEnum;
use App\Enums\RolesEnum;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

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
            'phone' => $this->phone,
            'role' => $this->whenLoaded('roles', function () {
                return $this->roles->map(function ($role) {
                    // $roleEnum = RolesEnum::from($role->name);
                    // return [
                    //     'id' => $role->id,
                    //     'label' => $roleEnum->label(),
                    //     'value' => $roleEnum->value,
                    // ];
                    return [
                        'id' => $role->id,
                        'title' => Str::title(str_replace('_', ' ', $role->name)),
                        'value' => $role->name,
                    ];
                })->first();
            }),
            'department' => $this->whenLoaded('department', function () {
                $departmentEnum = DepartmentsEnum::from($this->department->name);
                return [
                    'id' => $this->department->id,
                    'label' => $departmentEnum->label(),
                    'value' => $departmentEnum->value,
                ];
            }),
            'status' => [
                'label' => $this->status->label(),
                'value' => $this->status->value,
            ],
            'created_at' => $this->created_at->format('d-m-Y H:i:s A'),
            'updated_at' => $this->updated_at->format('d-m-Y H:i:s A'),
        ];
    }
}
