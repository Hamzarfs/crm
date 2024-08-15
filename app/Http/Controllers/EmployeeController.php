<?php

namespace App\Http\Controllers;

use App\Http\Requests\Employee\Store as EmployeeStoreRequest;
use App\Http\Requests\Employee\Update as EmployeeUpdateRequest;
use App\Models\User;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Twilio\Rest\Api\V2010\Account\Usage\Record\ThisMonthPage;

class EmployeeController extends Controller
{
    public function __construct(public ImageService $imageService)
    {
    }

    public function index()
    {
        $employees = User::role('employee')->get();

        return view('admin.employee.index', [
            'employees' => $employees
        ]);
    }

    public function create()
    {
        return view('admin.employee.create');
    }

    public function store(EmployeeStoreRequest $request)
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phonenumber' => $data['phone'],
        ]);

        if ($request->has('picture')) {
            $url = $this->imageService->saveEmployeePicture($request->file('picture'), $user);
            $user->update([
                'avatar' => $url
            ]);
        }

        $user->assignRole('employee');

        return redirect()->route('admin.employee.index')->with('success', 'Employee added successfully!');
    }

    public function edit(User $user)
    {
        return view('admin.employee.edit', [
            'employee' => $user,
        ]);
    }

    public function update(User $user, EmployeeUpdateRequest $request)
    {
        $data = $request->validated();

        $oldUser = clone $user;

        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->phonenumber = $data['phone'];

        if ($request->has('picture')) {
            $url = $this->imageService->saveEmployeePicture($request->file('picture'), $user, $oldUser);
            $user->avatar = $url;
        }

        $user->save();

        return redirect()->route('admin.employee.index')->with('success', 'Employee updated successfully!');
    }

    public function destroy(User $user) {
        $user->delete();
        return back()->with('success', 'Employee deleted successfully!');
    }
}
