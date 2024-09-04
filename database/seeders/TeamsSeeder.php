<?php

namespace Database\Seeders;

use App\Models\Team;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $teams = [
            'Sales',
            'Development',
            'Designing',
            'Marketing'
        ];

        DB::transaction(function () use ($teams) {
            Team::create([]);
        });
    }
}
