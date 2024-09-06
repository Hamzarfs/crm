<?php

namespace App\Http\Controllers;

use App\Enums\RolesEnum;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function all()
    {
        return response()->json([
            'roles' => Role::orderBy('id', 'asc')->pluck('name')->map(function ($role) {
                $roleEnum = RolesEnum::from($role);
                return [
                    'title' => $roleEnum->label(),
                    'value' => $roleEnum->value,
                ];
            })
        ]);
    }
}
