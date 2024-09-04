<?php

namespace Database\Seeders;

use App\Enums\RolesEnum;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Suraqa Jafrani',
            'email' => 'suraqa.rftech@gmail.com',
            'password' => bcrypt('abcd1234'),
        ])->assignRole(RolesEnum::ADMIN);
    }
}
