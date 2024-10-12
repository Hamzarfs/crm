<?php

namespace Database\Seeders;

use App\Models\LeadSource;
use Illuminate\Database\Seeder;

class LeadSourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $lead_sources = [
            [
                'name' => 'PPC Google',
                'type' => 'paid',
            ],
            [
                'name' => 'Organic',
                'type' => 'unpaid',
            ],
            [
                'name' => 'Bark',
                'type' => 'paid',
            ],
            [
                'name' => 'Meta Facebook',
                'type' => 'paid',
            ]
        ];

        foreach ($lead_sources as $ls) {
            LeadSource::create([
                'name' => $ls['name'],
                'type' => $ls['type'],
            ]);
        }
    }
}
