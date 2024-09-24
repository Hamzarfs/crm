<?php

namespace Database\Seeders;

use App\Enums\RolesEnum;
use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@rftech.com',
            'password' => bcrypt('abcd1234'),
            'department_id' => Department::where('name', 'admin')->value('id'),
        ])->assignRole(RolesEnum::ADMIN);
    }
}
