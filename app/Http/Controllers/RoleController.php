<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Str;

class RoleController extends Controller
{
    public function all()
    {
        return response()->json([
            'roles' => Role::orderBy('id', 'asc')->get(['name', 'id'])->map(function ($role) {
                return [
                    'id' => $role->id,
                    'title' => Str::title(str_replace('_', ' ', $role->name)),
                    'value' => $role->name,
                ];
            })
        ]);
    }

    public function store(Request $request)
    {
        $role = Role::create([
            'name' => Str::slug($request->name, '_'),
            'guard_name' => 'api'
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Role created successfully!',
            'role' => [
                'id' => $role->id,
                'title' => Str::title(str_replace('_', ' ', $role->name)),
                'value' => $role->name,
            ]
        ]);
    }

    public function update(Request $request, Role $role)
    {
        $role->update(['name' => Str::slug($request->name, '_')]);
        return response()->json([
            'success' => true,
            'message' => 'Role updated successfully!',
            'role' => [
                'id' => $role->id,
                'title' => Str::title(str_replace('_', ' ', $role->name)),
                'value' => $role->name,
            ]
        ]);
    }

    public function delete(Role $role)
    {
        $role->delete();
        return response()->json([
            'success' => true,
            'message' => 'Role deleted successfully!'
        ]);
    }
}
