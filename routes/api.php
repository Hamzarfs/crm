<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::post('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user']);
    });
});

Route::group([
    'middleware' => ['auth:sanctum'],
], function () {

    Route::group([
        'prefix' => 'users',
        'controller' => UserController::class
    ], function () {
        Route::get('', 'list');
        Route::get('statuses', 'getStatuses');
        Route::post('', 'store');
        Route::get('count', 'employeeCount');
    });

    Route::get('roles', [RoleController::class, 'all']);
});
