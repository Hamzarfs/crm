<?php

use App\Http\Controllers\ArtisanController;
use Illuminate\Support\Facades\Route;

Route::prefix('artisan')->controller(ArtisanController::class)->group(function() {
    Route::get('migrate', 'migrate');
});
