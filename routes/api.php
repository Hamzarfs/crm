<?php

use App\Http\Controllers\{AuthController, DepartmentController, BrandController, CampaignController, CurrencyController, CustomerController, EmailController, LeadController, LeadPipelineStageController, LeadSourceController, NotificationController, RoleController, ServiceController, TaskController, UserController};
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
    Route::prefix('users')
        ->controller(UserController::class)
        ->group(function () {
            Route::get('', 'list')->middleware('role_or_department:admin|hr|team_lead,sales|lead_generation');
            Route::middleware('role:admin|hr')->group(function () {
                Route::get('statuses', 'getStatuses');
                Route::post('', 'store');
                Route::put('{user}', 'update');
                Route::delete('{user}', 'delete');
                Route::get('count', 'employeeCount');
                Route::prefix('import')
                    ->group(function () {
                        Route::get('sample/download', 'downloadSample');
                        Route::post('', 'importEmployees');
                    });
            });
        });

    Route::middleware('role:admin')
        ->group(function () {
            Route::prefix('roles')
                ->controller(RoleController::class)
                ->group(function () {
                    Route::get('', 'all')->withoutMiddleware('role:admin')->middleware('role:admin|hr');
                    Route::post('', 'store');
                    Route::put('{role}', 'update');
                    Route::delete('{role}', 'delete');
                });

            Route::prefix('departments')
                ->controller(DepartmentController::class)
                ->group(function () {
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
            Route::get('kanban', 'kanbanList');
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

    Route::prefix('notifications')->controller(NotificationController::class)->group(function () {
        Route::get('all', 'all');
        Route::post('read', 'markNotifcationsAsRead');
        Route::post('unread', 'markNotifcationsAsUnread');
    });

    Route::prefix('services')
        ->controller(ServiceController::class)
        ->group(function () {
            Route::get('', 'list')->middleware(['department:admin,sales,lead_generation']);

            Route::middleware(['role:admin|team_lead', 'department:admin,sales'])->group(function () {
                Route::post('', 'store');
                Route::put('{service}', 'update');
                Route::delete('{service}', 'delete');
            });
        });
    Route::prefix('brands')
        ->controller(BrandController::class)
        ->group(function () {
            Route::get('', 'all')->middleware(['department:admin,sales,lead_generation']);

            Route::middleware(['role:admin|team_lead', 'department:admin,sales'])->group(function () {
                Route::post('', 'store');
                Route::put('{brand}', 'update');
                Route::delete('{brand}', 'delete');
            });
        });
    Route::prefix('leadsources')
        ->controller(LeadSourceController::class)
        ->group(function () {
            Route::get('', 'all')->middleware(['department:admin,sales,lead_generation']);

            Route::middleware(['role:admin|team_lead', 'department:admin,sales'])->group(function () {
                Route::post('', 'store');
                Route::put('{leadsource}', 'update');
                Route::delete('{leadsource}', 'delete');
            });
        });

    Route::get('currencies', [CurrencyController::class, 'all']);

    Route::prefix('customers')
        ->controller(CustomerController::class)
        ->middleware('department:admin,sales,lead_generation')
        ->group(function () {
            Route::get('', 'list');
            Route::post('', 'store');
            Route::put('{customer}', 'update');
            Route::delete('{customer}', 'delete');
        });

    Route::prefix('leads')
        ->controller(LeadController::class)
        ->group(function () {
            Route::middleware(['department:admin,sales,lead_generation'])
                ->group(function () {
                    Route::get('', 'list');
                    Route::post('', 'store');
                    Route::get('statuses', 'getLeadStatuses');
                    Route::get('count', 'leadCount');
                    Route::put('{lead}', 'update');
                    Route::delete('{lead}', 'delete');
                });

            Route::middleware(['department:admin,sales'])
                ->group(function () {
                    Route::patch('{lead}/pick', 'pickLead')->middleware('role:sales_agent');
                    Route::patch('{lead}/assign', 'assignLead')->middleware('role:admin|team_lead|sales_agent');

                    Route::patch('{lead}/update-pipeline-stage', 'updatePipelineStage');
                    Route::get('without-pipeline-stage', 'withoutPipelineStage');
                });

            Route::middleware(['role:sales_agent', 'department:sales'])
                ->group(function () {
                    Route::post('{lead}/details', 'addDetails');
                });
        });

    Route::prefix('lead-stages')
        ->controller(LeadPipelineStageController::class)
        ->middleware(['department:admin,sales'])
        ->group(function () {
            Route::get('', 'list')->middleware(['role:admin|team_lead|sales_agent']);
            Route::middleware(['role:admin|team_lead'])
                ->group(function () {
                    Route::post('', 'store');
                    Route::put('{stage}', 'update');
                    Route::delete('{stage}', 'delete');
                    // Route::post('sort', 'sort');
                });
        });

    Route::prefix('campaigns')
        ->controller(CampaignController::class)
        ->middleware('department:admin,sales,lead_generation')
        ->group(function () {
            Route::get('', 'list');
            // Route::post('', 'store');
            // Route::put('{campaign}', 'update');
            // Route::delete('{campaign}', 'delete');
        });

    Route::prefix('emails')
        ->controller(EmailController::class)
        ->group(function () {
            Route::post('send', 'send');

            Route::get('folders-with-meta', 'fetchFoldersAndMeta');
            Route::get('mails/{folder}', 'fetchMails');
            // Route::prefix('get')->group(function () {
            // });
        });
});
