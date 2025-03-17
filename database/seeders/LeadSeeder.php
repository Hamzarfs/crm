<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Customer;
use App\Models\Lead;
use App\Models\LeadSource;
use App\Models\Service;
use Illuminate\Database\Seeder;

class LeadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Lead::create([
            'customer_id' => Customer::query()->value('id'),
            'lead_source_id' => LeadSource::query()->value('id'),
            'brand_id' => Brand::query()->value('id'),
            'service_id' => Service::query()->value('id'),
            'status' => 'No answer',
        ]);
    }
}
