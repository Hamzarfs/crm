<?php

namespace Database\Seeders;

use App\Enums\DepartmentsEnum;
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
            'name' => 'Suraqa Jafrani',
            'email' => 'suraqa@rftech.com',
            'password' => bcrypt('abcd1234'),
            'department_id' => Department::where('name', DepartmentsEnum::ADMIN->value)->value('id'),
        ])->assignRole(RolesEnum::ADMIN);
    }
}
