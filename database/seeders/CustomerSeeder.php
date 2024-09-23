<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = fake();
        Customer::create([
            'first_name' => $faker->firstName(),
            'last_name' => $faker->lastName(),
            'email' => $faker->email(),
            'contact' => $faker->phoneNumber(),
            'area' => $faker->address(),
            'zip' => $faker->randomNumber(5, true),
            'country' => $faker->country(),
        ]);
    }
}
