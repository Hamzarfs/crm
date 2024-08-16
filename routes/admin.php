<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SubCateoryController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('/dashboard', [ProfileController::class, 'dashboard'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::group([], function () {
        Route::resource('user', UserController::class);
        Route::resource('role', RoleController::class);
        Route::resource('permission', PermissionController::class);
        Route::resource('category', CategoryController::class);
        Route::resource('subcategory', SubCateoryController::class);
        Route::resource('collection', CollectionController::class);
        Route::resource('product', ProductController::class);
        Route::resource('employee', EmployeeController::class);
        Route::group([
            'as' => 'employee.',
            'prefix' => 'employee/{user}/upload-documents',
        ], function () {
            Route::get('', [EmployeeController::class, 'uploadDocumentsView'])->name('uploadDocumentsView');
            Route::post('', [EmployeeController::class, 'uploadDocuments'])->name('uploadDocuments');
        });
        Route::delete('employee/document/{document}', [EmployeeController::class, 'deleteDocument'])->name('employee.document.delete');
        Route::get('/get/subcategory', [ProductController::class, 'getsubcategory'])->name('getsubcategory');
        Route::get('/remove-external-img/{id}', [ProductController::class, 'removeImage'])->name('remove.image');
    });
    Route::prefix('orders')->name('orders.')->group(function () {
        Route::get('', [OrderController::class, 'index'])->name('index');
    });
});
