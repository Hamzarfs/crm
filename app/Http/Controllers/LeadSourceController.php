<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sales\LeadSource\Store;
use App\Http\Requests\Sales\LeadSource\Update;
use App\Models\LeadSource;

class LeadSourceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function all()
    {
        $leadSources = LeadSource::orderBy('id', 'asc');

        if (request()->user()->hasDepartment('lead_generation')) {
            $leadSources->where('type', 'unpaid');
        }

        return response()->json([
            'leadsources' => $leadSources->get()->map(function ($leadSource) {
                return [
                    'id' => $leadSource->id,
                    'name' => $leadSource->name,
                    'type' => $leadSource->type,
                ];
            })
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $leadSource = LeadSource::create([
            'name' => $request->name,
            'type' => $request->type,
        ]);

        return response()->json([
            'message' => 'Lead Source created successfully',
            'success' => true,
            'leadsource' => [
                'id' => $leadSource->id,
                'name' => $leadSource->name,
                'type' => $leadSource->type
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, LeadSource $leadsource)
    {
        $leadsource->update([
            'name' => $request->name,
            'type' => $request->type,
        ]);

        return response()->json([
            'message' => 'Lead Source updated successfully',
            'success' => true,
            'leadsource' => [
                'id' => $leadsource->id,
                'name' => $leadsource->name,
                'type' => $leadsource->type
            ]
        ]);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function delete(LeadSource $leadsource)
    {
        if ($leadsource->leads()->exists())
            return response()->json([
                'success' => false,
                'message' => "Lead source: {$leadsource->name} is associated with lead(s). Please delete the corresponding lead first."
            ]);

        $leadsource->delete();
        return response()->json([
            'success' => true,
            'message' => 'Lead Source deleted successfully!'
        ]);
    }
}
