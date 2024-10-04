<?php

namespace App\Http\Controllers;

use App\Enums\EmployeeStatusesEnum;
use App\Http\Requests\User\Import;
use App\Http\Requests\User\Store;
use App\Http\Requests\User\Update;
use App\Http\Resources\Collections\UserResourceCollection;
use App\Imports\EmployeeImport;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\Test\Constraint\ResponseFormatSame;

class UserController extends Controller
{
    public function list(Request $request)
    {
        if ($request->hasAny(['q', 'itemsPerPage', 'page'])) {
            return $this->getUserDT($request);
        } else {
            return $this->getUserAll($request);
        }
    }

    private function getUserAll(Request $request)
    {
        $department = $request->input('department');
        $users = User::where([
            ['status', EmployeeStatusesEnum::ACTIVE],
            ['id', '!=', $request->user()->id]
        ])->when(
            value: $department,
            callback: fn(Builder $userQuery, string | array $department) => is_array($department) ? $userQuery->whereIn('department_id', $department) : $userQuery->where('department_id', $department)
        )->get();

        return response()->json([
            'users' => $users,
        ]);
    }

    private function getUserDT(Request $request)
    {
        $page = (int) $request->input('page', 1);
        $itemsPerPage = (int) $request->input('itemsPerPage', 10);
        $query = $request->input('q');
        $status = $request->input('status');
        $role = $request->input('role');
        $department = $request->input('department');
        $orderByColumn = $request->input('sortBy');
        $orderByDir = $request->input('orderBy');

        $users = User::with(['roles', 'department']);

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
        )->when(        // Apply department filter
            value: $department,
            callback: fn(Builder $userQuery, string $department) => $userQuery->whereRelation('department', 'name', '=', $department)
        )->when(        // Apply ordering
            value: fn() => (!is_null($orderByColumn) && !is_null($orderByDir)) ? ['column' => $orderByColumn, 'dir' => $orderByDir] : null,
            callback: fn(Builder $userQuery, array $orderBy) => $userQuery->orderBy($orderBy['column'], $orderBy['dir'])
        );

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

    public function store(Store $request)
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt('crm123'),
            'phone' => $data['phone'],
            'status' => $data['status'],
            'department_id' => $data['department']
        ]);


        $user->assignRole($data['role']);

        $this->addEmployeeDetails($user, $data['details']);

        return response()->json([
            'success' => true,
            'message' => 'Employee created successfully!'
        ]);
    }

    public function update(Update $request, User $user)
    {
        $data = $request->validated();

        $user->update([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'status' => $data['status'],
            'department_id' => $data['department']
        ]);

        $user->syncRoles($data['role']);

        $this->addEmployeeDetails($user, $data['details']);

        return response()->json([
            'success' => true,
            'message' => 'Employee updated successfully!'
        ]);
    }

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

    public function delete(User $user)
    {
        $message = false;

        if ($user->leadingDepartment()->exists())
            $message = sprintf("Employee: %s is assigned as leader of Department: %s. Please unassign the employee from department leader.", $user->name, Str::title(str_replace('_', ' ', $user->leadingDepartment->name)));

        if ($user->leads()->exists())
            $message = "Employee: {$user->name} has created lead(s). Please delete the associated lead(s) first to proceed.";

        if ($user->assignedTasks()->exists())
            $message = "Employee: {$user->name} is assigned to task(s). Please unassign the employee from the corresponding task(s) first.";

        if ($user->createdTasks()->exists())
            $message = "Employee: {$user->name} has created task(s). Please delete the corresponding task(s) first.";

        if ($message)
            return response()->json([
                'success' => false,
                'message' => $message
            ]);

        $user->details()->delete();
        $user->delete();
        return response()->json([
            'success' => true,
            'message' => 'Employee deleted successfully!'
        ]);
    }

    protected function addEmployeeDetails(User $employee, array $data): void
    {
        DB::beginTransaction();
        try {
            foreach ($data as $key => $value) {
                $employee->details()->updateOrCreate([
                    'key' => $key
                ], [
                    'value' => $value
                ]);
            }
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error($th->getMessage());
            Log::error($th->getTraceAsString());
            throw $th;
        }
        DB::commit();
    }

    public function downloadSample()
    {
        return Storage::download('sample.xlsx');
    }

    public function importEmployees(Import $request)
    {
        $file = $request->validated('file');

        try {
            Excel::import(new EmployeeImport, $file);
        } catch (ValidationException $e) {
            $errors = transformErrorMessagesToIncludeRowNumber($e->errors());
            return response()->json([
                'success' => false,
                'message' => $errors
            ], 422);
        }
        return response()->json([
            'success' => true,
            'message' => 'Employee imported successfully'
        ]);
    }
}
