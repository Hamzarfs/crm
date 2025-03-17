<?php

namespace Database\Seeders;

use App\Models\LeadStatus;
use Illuminate\Database\Seeder;

class LeadStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = ['New lead', 'Garbage', 'Lost (Projects with others)', 'Blocked', 'No answer', 'Hung up', 'Wrong number', 'Voice mail', 'Found someone', 'Follow up', 'Not interested', 'Blocked', 'Sale closed', 'Cant connect', 'Not in service', 'Invalid lead', 'Email done', 'Call done', 'No number', 'Not interested', 'Interested'];

        foreach ($statuses as $status) {
            LeadStatus::create(['name' => $status]);
        }
    }
}
