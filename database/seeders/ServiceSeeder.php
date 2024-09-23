<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            'Readymade Logo',
            'Custom Logo',
            'Branding',
            'Website',
            'SEO',
            'SMM',
            'Printing'
        ];

        foreach ($services as $s) {
            Service::create([
                'name' => $s
            ]);
        }
    }
}
