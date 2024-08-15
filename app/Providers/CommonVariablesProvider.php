<?php

namespace App\Providers;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\ServiceProvider;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class CommonVariablesProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $userCount = User::count();
        view()->share('userCount', $userCount);

        $RoleCount = Role::count();
        view()->share('RoleCount', $RoleCount);

        $PermissionCount = Permission::count();
        view()->share('PermissionCount', $PermissionCount);

        $CategoryCount = Category::count();
        view()->share('CategoryCount', $CategoryCount);

        // $SubCategoryCount = SubCategory::count();
        // view()->share('SubCategoryCount',$SubCategoryCount);

        // $CollectionCount = Collection::count();
        // view()->share('CollectionCount',$CollectionCount);

        $ProductCount = Product::count();
        view()->share('ProductCount', $ProductCount);

        $employeesCount = User::role('employee')->count();
        view()->share('employeesCount', $employeesCount);
    }
}
