<?php

namespace Database\Seeders;

use App\Models\Campaign;
use Illuminate\Database\Seeder;

class CampaignSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $campaigns = ['Logo design', 'Web design', 'E-book', 'Content Writing'];

        foreach ($campaigns as $campaign) {
            Campaign::create(['name' => $campaign]);
        }
    }
}
