<?php

use App\Http\Controllers\{AuthController, DepartmentController, BrandController, CustomerController, LeadController, LeadSourceController, NotificationController, RoleController, ServiceController, TaskController, UserController};
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

    Route::prefix('users')->controller(UserController::class)->group(function () {
        Route::get('', 'list')->middleware('role:admin|hr|team_lead');
        Route::middleware('role:admin|hr')->group(function () {
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

    Route::prefix('tasks')
        ->controller(TaskController::class)
        ->group(function () {
            Route::get('', 'list');
            Route::middleware('role:admin|team_lead')->group(function () {
                Route::post('', 'store');
                Route::put('{task}', 'update');
                Route::delete('{task}', 'delete');
            });
            Route::get('files/{taskFile}', 'downloadFile');
            Route::patch('{task}/status', 'updateStatus');
            Route::post('{task}/comments', 'addComment');
            Route::delete('comments/{taskComment}', 'deleteComment');
        });

    Route::get('notfications/all', [NotificationController::class, 'all']);

    Route::prefix('services')
        ->controller(ServiceController::class)
        ->middleware('department:admin,sales')
        ->group(function () {
            Route::get('', 'list');
            Route::middleware('role:admin|team_lead')->group(function () {
                Route::post('', 'store');
                Route::put('{service}', 'update');
                Route::delete('{service}', 'delete');
            });
        });

    Route::prefix('brands')
        ->controller(BrandController::class)
        ->middleware('department:admin,sales')
        ->group(function () {
            Route::get('', 'all');
            Route::middleware('role:admin|team_lead')->group(function () {
                Route::post('', 'store');
                Route::put('{brand}', 'update');
                Route::delete('{brand}', 'delete');
            });
        });


    Route::prefix('leadsources')
        ->controller(LeadSourceController::class)
        ->middleware('department:admin,sales')
        ->group(function () {
            Route::get('', 'all');
            Route::middleware('role:admin|team_lead')->group(function () {
                Route::post('', 'store');
                Route::put('{leadsource}', 'update');
                Route::delete('{leadsource}', 'delete');
            });
        });

    Route::prefix('customers')
        ->controller(CustomerController::class)
        ->middleware('department:admin,sales')
        ->group(function () {
            Route::get('', 'list');
            Route::middleware('role:admin|team_lead')->group(function () {
                Route::post('', 'store');
                Route::put('{customer}', 'update');
                Route::delete('{customer}', 'delete');
            });
        });

    Route::prefix('leads')
        ->controller(LeadController::class)
        ->middleware('department:admin,sales')
        ->group(function () {
            Route::get('', 'list');
            Route::post('', 'store');
            Route::put('{lead}', 'update');
            Route::delete('{lead}', 'delete');
        });
});
