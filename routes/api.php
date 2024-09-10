<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TaskController;
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

Route::middleware('auth:sanctum')->group(function () {
    Route::middleware('role:admin|hr')->group(function () {
        Route::prefix('users')->controller(UserController::class)->group(function () {
            Route::get('', 'list');
            Route::get('statuses', 'getStatuses');
            Route::post('', 'store');
            Route::put('{user}', 'update');
            Route::delete('{user}', 'delete');
            Route::get('count', 'employeeCount');
        });
    });

    Route::middleware('role:admin')->group(function () {
        Route::prefix('roles')->controller(RoleController::class)->group(function () {
            Route::get('', 'all')->withoutMiddleware('role:admin')->middleware('role:admin|hr');
            Route::post('', 'store');
            Route::put('{role}', 'update');
            Route::delete('{role}', 'delete');
        });

        Route::prefix('departments')->controller(DepartmentController::class)->group(function () {
            Route::get('', 'all')->withoutMiddleware('role:admin')->middleware('role:admin|hr');
            Route::post('', 'store');
            Route::put('{department}', 'update');
            Route::delete('{department}', 'delete');
        });
    });

    Route::middleware('role:admin|team_lead')->group(function () {
        Route::prefix('tasks')->controller(TaskController::class)->group(function () {
            Route::get('', 'list');
            Route::post('', 'store');
            Route::put('{task}', 'update');
            Route::delete('{task}', 'delete');
        });
    });
});
