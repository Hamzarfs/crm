<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function index()
    {
        $data = Role::orderBy('id', 'DESC')->get();
        return view('admin.role.index', [
            'data' => $data
        ]);
    }

    public function create()
    {
        return view('admin.role.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:roles|max:255',
        ]);
        Role::create([
            'name' => $request->name,
        ]);

        return redirect()->route('admin.role.index')->with('success', "Role created successfully.");
    }

    public function update(Role $role, Request $request)
    {
        $data = $request->validate([
            'name' => "required|max:255|unique:roles,name,{$role->id}",
        ]);

        $role->update([ 'name' => $data['name'] ]);

        return redirect()->route('admin.role.index')->with('success', "Role updated successfully.");
    }

    public function edit(Role $role)
    {
        return view('admin.role.edit', [
            'role' => $role
        ]);
    }

    public function destroy(Role $role)
    {
        $role->delete();
        return redirect()->route('admin.role.index')->with('error', 'Role deleted successfully.');
    }
}
