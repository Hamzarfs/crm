<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = [
            'RFS',
            'Creative',
            'Mania'
        ];

        foreach ($brands as $b) {
            Brand::create([
                'name' => $b
            ]);
        }
    }
}
