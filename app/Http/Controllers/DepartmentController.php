<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DepartmentController extends Controller
{
    public function all()
    {
        return response()->json([
            'departments' => Department::with('leader')->orderBy('id', 'asc')->get()->map(function ($department) {
                return [
                    'id' => $department->id,
                    'title' => Str::title(str_replace('_', ' ', $department->name)),
                    'leader' => $department->leader?->name,
                    'leader_id' => $department->leader_id,
                    'value' => $department->name,
                ];
            })
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $department = Department::create([
            'name' => Str::slug($request->name, '_', dictionary: ['&' => 'and']),
            'leader_id' => $request->leader_id,
        ]);
        $department->load('leader');
        return response()->json([
            'message' => 'Department created successfully',
            'success' => true,
            'department' => [
                'id' => $department->id,
                'title' => Str::title(str_replace('_', ' ', $department->name)),
                'leader' => $department->leader?->name,
                'leader_id' => $department->leader_id,
                'value' => $department->name,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Department $department)
    {
        $department->update([
            'name' => Str::slug($request->name, '_', dictionary: ['&' => 'and']),
            'leader_id' => $request->leader_id,
        ]);
        $department->load('leader');
        return response()->json([
            'message' => 'Department updated successfully',
            'success' => true,
            'department' => [
                'id' => $department->id,
                'title' => Str::title(str_replace('_', ' ', $department->name)),
                'leader' => $department->leader?->name,
                'leader_id' => $department->leader_id,
                'value' => $department->name,
            ]
        ]);
    }

    public function delete(Department $department)
    {
        $department->delete();
        return response()->json([
            'success' => true,
            'message' => 'Department deleted successfully!'
        ]);
    }
}
