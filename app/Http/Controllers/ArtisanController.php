<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Artisan;

class ArtisanController extends Controller
{
    public function migrate() {
        Artisan::call('migrate');
        return Artisan::output();
    }
}
