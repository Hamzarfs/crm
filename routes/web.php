<?php

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

Route::prefix('artisan')->group(function () {
    Route::get('migrate', function () {
        // Execute the Artisan command (e.g., 'migrate')
        Artisan::call('migrate');

        // Get the output of the command
        $output = Artisan::output();

        // Display the output (you can return it as a response)
        return "<pre>$output</pre>";  // Output the command result
    });

    Route::get('seed', function () {
        // Execute the Artisan command (e.g., 'migrate')
        Artisan::call('db:seed');

        // Get the output of the command
        $output = Artisan::output();

        // Display the output (you can return it as a response)
        return "<pre>$output</pre>";  // Output the command result
    });
});

Route::get('{any?}', function () {
    return view('application');
})->where('any', '.*');
