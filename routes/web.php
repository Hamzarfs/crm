<?php

use App\Events\ExampleEvent;
use App\Models\User;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;

Broadcast::routes();

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

Route::get('/fire-event', function () {
    event(new ExampleEvent(User::find(1)));
    return 'Event Fired!';
});

Route::get('{any?}', function () {
    return view('application');
})->where('any', '.*');
