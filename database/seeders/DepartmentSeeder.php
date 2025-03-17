<?php

namespace Database\Seeders;

use App\Enums\DepartmentsEnum;
use App\Models\Department;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::transaction(function () {
            foreach (DepartmentsEnum::cases() as $department) {
                Department::create([
                    'name' => $department->value
                ]);
            }
        });
    }
}
