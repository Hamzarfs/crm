<?php

use Illuminate\Support\Facades\{Artisan, Broadcast, Route};


Broadcast::routes();

// Route::get('test', [EmailController::class, 'fetchFoldersAndMeta']);

// Route::get('ttest', [EmailController::class, 'test']);

// Route::get('test/{folder}', [EmailController::class, 'fetchMails']);

Route::prefix('artisan')->group(function () {
    Route::get('migrate', function () {
        Artisan::call('migrate');

        $output = Artisan::output();

        return "<pre>$output</pre>";
    });

    Route::get('migrate/fresh', function () {
        Artisan::call('migrate:fresh');

        $output = Artisan::output();

        return "<pre>$output</pre>";
    });

    Route::get('seed', function () {
        Artisan::call('db:seed');

        $output = Artisan::output();

        return "<pre>$output</pre>";
    });
});

Route::get('{any?}', function () {
    return view('application');
})->where('any', '.*');
