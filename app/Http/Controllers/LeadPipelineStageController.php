<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sales\Lead\PipelineStage\Store;
use App\Http\Requests\Sales\Lead\PipelineStage\Update;
use App\Http\Resources\Collections\Sales\LeadResourceCollection;
use App\Models\Lead;
use App\Models\LeadPipelineStage;
use Illuminate\Http\Request;

class LeadPipelineStageController extends Controller
{
    public function list()
    {
        return response()->json([
            'pipelineStages' => LeadPipelineStage::with(
                [
                    'leads' => fn($leadsQuery) => $leadsQuery
                        ->with(['servicesSold', 'upsells.serviceSold', 'customer', 'leadSource', 'brand.currency', 'createdBy', 'assignedTo', 'assignedBy', 'campaign', 'details.agent'])
                        ->withCount(['servicesSold', 'upsells'])
                ]
            )
                ->get()
                ->map(fn($pipelineStage) => [
                    'id' => $pipelineStage->id,
                    'order' => $pipelineStage->order,
                    'title' => $pipelineStage->name,
                    'itemsIds' => $pipelineStage->leads->modelKeys(),
                    'items' => new LeadResourceCollection($pipelineStage->leads),
                ])
        ]);
    }

    public function store(Store $request)
    {
        $data = (object) $request->validated();
        $last_order = LeadPipelineStage::query()->max('order');
        $stage = LeadPipelineStage::create(['name' => $data->name, 'order' => $last_order + 1]);
        return response()->json([
            'success' => true,
            'message' => 'Lead pipeline stage created successfully!',
            'pipelineStage' => [
                'id' => $stage->id,
                'order' => $stage->order,
                'title' => $stage->name,
                'itemsIds' => $stage->leads->modelKeys(),
                'items' => $stage->leads,
            ]
        ]);
    }

    public function update(Update $request, LeadPipelineStage $stage)
    {
        $data = (object) $request->validated();
        $stage->update(['name' => $data->name]);
        $stage->load([
            'leads' => fn($leadsQuery) => $leadsQuery
                ->with(['servicesSold', 'upsells.serviceSold', 'customer', 'leadSource', 'brand.currency', 'createdBy', 'assignedTo', 'assignedBy', 'campaign', 'details.agent'])
                ->withCount(['servicesSold', 'upsells'])
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Lead pipeline stage updated successfully!',
            'pipelineStage' => [
                'id' => $stage->id,
                'order' => $stage->order,
                'title' => $stage->name,
                'itemsIds' => $stage->leads->modelKeys(),
                'items' => new LeadResourceCollection($stage->leads),
            ]
        ]);
    }

    public function delete(LeadPipelineStage $stage)
    {
        if ($stage->leads()->exists())
            return response()->json([
                'success' => false,
                'message' => sprintf(
                    "%d lead(s) are in this pipeline stage. Please unassign these lead(s) before deleting '%s' pipeline stage.",
                    $stage->loadCount('leads')->leads_count,
                    $stage->name
                )
            ]);

        $stage->delete();
        return response()->json([
            'success' => true,
            'message' => 'Lead pipeline stage deleted successfully!'
        ]);
    }

    // public function sort(Request $request)
    // {
    //     $p1 = $request->input('pipeline_1');
    //     $p2 = $request->input('pipeline_2');

    //     $pipeline1 = LeadPipelineStage::find($p1);
    //     $pipeline2 = LeadPipelineStage::find($p2);

    //     $temp = $pipeline1->order;

    //     $pipeline1->update(['order' => $pipeline2->order]);
    //     $pipeline2->update(['order' => $temp]);

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Pipeline stages order change successfully!'
    //     ]);
    // }
}
