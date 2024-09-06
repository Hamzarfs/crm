<?php

namespace App\Http\Controllers;

use App\Enums\EmployeeStatusesEnum;
use App\Http\Resources\UserResourceCollection;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function list(Request $request)
    {
        sleep(5);

        $page = (int) $request->input('page', 1);
        $itemsPerPage = (int) $request->input('itemsPerPage', 10);
        $query = $request->input('q');
        $status = $request->input('status');
        $role = $request->input('role');
        $orderByColumn = $request->input('sortBy');
        $orderByDir = $request->input('orderBy');

        $users = User::with('roles');

        // Apply query filters
        $users = $users->when(
            value: $query,
            callback: fn(Builder $userQuery, string $query) => $userQuery->where(
                column: [
                    ['name', 'LIKE', "%$query%", 'or'],
                    ['email', 'LIKE', "%$query%", 'or'],
                    ['phone', 'LIKE', "%$query%", 'or'],
                ],
            ),
        )->when(        // Apply status filter
            value: $status,
            callback: fn(Builder $userQuery, string $status) => $userQuery->where('status', $status)
        )->when(        // Apply role filter
            value: $role,
            callback: fn(Builder $userQuery, string $role) => $userQuery->whereRelation('roles', 'name', '=', $role)
        )->when(        // Apply ordering
            value: fn() => (!is_null($orderByColumn) && !is_null($orderByDir)) ? ['column' => $orderByColumn, 'dir' => $orderByDir] : null,
            callback: fn(Builder $userQuery, array $orderBy) => $userQuery->orderBy($orderBy['column'], $orderBy['dir'])
        );

        // Apply status filter
        // $users = $users->when(
        //     value: $status,
        //     callback: fn(Builder $userQuery, string $status) => $userQuery->where('status', $status)
        // );

        // $totalUsers = $users->count();

        // $users = $users->skip($page * $itemsPerPage)->take($itemsPerPage)->get();

        // Apply pagination
        $paginatedUsers = $users->paginate($itemsPerPage, page: $page);
        $currentPage = $paginatedUsers->currentPage();
        $lastPage = $paginatedUsers->lastPage();
        $total = $paginatedUsers->total();

        $users = new UserResourceCollection($paginatedUsers);

        return response()->json([
            'users' => $users,
            'totalUsers' => $total,
            'page' => ($currentPage <= $lastPage) ? $currentPage : $lastPage,
            'totalPages' => $lastPage,
        ]);
    }

    public function getStatuses()
    {
        return response()->json([
            'status' => collect(EmployeeStatusesEnum::cases())->map(function ($statusEnum) {
                return [
                    'title' => $statusEnum->label(),
                    'value' => $statusEnum->value,
                ];
            })
        ]);
    }

    public function store() {}

    public function employeeCount()
    {
        $totalUsers = User::count();
        $activeUsers = User::where('status', EmployeeStatusesEnum::ACTIVE)->count();
        $inactiveUsers = User::where('status', EmployeeStatusesEnum::INACTIVE)->count();

        $lastMonth = now()->subMonth();
        $startlastMonth = $lastMonth->startOfMonth()->format('Y-m-d H:i:s');
        $endlastMonth = $lastMonth->endOfMonth()->format('Y-m-d H:i:s');

        $newUsers = User::whereBetween('created_at', [$startlastMonth, $endlastMonth])->count();

        return response()->json([
            'total' => $totalUsers,
            'active' => $activeUsers,
            'inactive' => $inactiveUsers,
            'new' => $newUsers,
        ]);
    }
}
