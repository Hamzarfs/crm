<?php

namespace Database\Seeders;

use App\Models\Lead;
use App\Models\LeadPipelineStage;
use Illuminate\Database\Seeder;

class LeadPipelineStageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $stages = LeadPipelineStage::all();

        $stages = [];
        foreach (range(1, 5) as $i) {
            $stages[] = LeadPipelineStage::create([
                'name' => "Stage $i",
                'order' => $i,
            ]);
        }

        Lead::all()->map(fn(Lead $lead) => $lead->pipelineStage()->associate($stages[rand(0, 4)])->save());
    }
}
