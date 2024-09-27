<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LeadSource;
use Illuminate\Support\Str;

class LeadSourceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function all()
    {
        return response()->json([
            'leadsources' => LeadSource::orderBy('id', 'asc')->get()->map(function ($leadSource) {
                return [
                    'id' => $leadSource->id,
                    'name' => $leadSource->name,
                ];
            })
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $leadSource = LeadSource::create([
            'name' => $request->name
        ]);

        return response()->json([
            'message' => 'Lead Source created successfully',
            'success' => true,
            'leadsource' => [
                'id' => $leadSource->id,
                'name' => Str::title(str_replace('_', ' ', $leadSource->name)),

            ]
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, LeadSource $leadsource)
    {
        $leadsource->update([
            'name' => $request->name

        ]);

        return response()->json([
            'message' => 'Lead Source updated successfully',
            'success' => true,
            'leadsource' => [
                'id' => $leadsource->id,
                'name' => $leadsource->name,

            ]
        ]);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function delete(LeadSource $leadsource)
    {
        $leadsource->delete();
        return response()->json([
            'success' => true,
            'message' => 'Lead Source deleted successfully!'
        ]);
    }
}
