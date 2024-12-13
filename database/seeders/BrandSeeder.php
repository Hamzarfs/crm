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
            [
                'name' => 'RFS',
                'country' => 'USA',
                'currency_id' => 1
            ],
            [
                'name' => 'Creative',
                'country' => 'UK',
                'currency_id' => 2
            ],
            [
                'name' => 'Mania',
                'country' => 'UK',
                'currency_id' => 2
            ],
        ];

        foreach ($brands as $b) {
            Brand::create([
                'name' => $b['name'],
                'country' => $b['country'],
                'currency_id' => $b['currency_id'],
            ]);
        }
    }
}
