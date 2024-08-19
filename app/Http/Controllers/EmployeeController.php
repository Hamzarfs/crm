<?php

namespace App\Http\Controllers;

use App\Http\Requests\Employee\Document\Store as EmployeeDocumentStoreRequest;
use App\Http\Requests\Employee\Store as EmployeeStoreRequest;
use App\Http\Requests\Employee\Update as EmployeeUpdateRequest;
use App\Models\Employee\Document;
use App\Models\User;
use App\Services\Employee\DocumentService;
use App\Services\ImageService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class EmployeeController extends Controller
{
    public function __construct(
        public ImageService $imageService,
        public DocumentService $documentService,
    ) {}

    public function index()
    {
        $employees = User::role('employee')->get();

        return view('admin.employee.index', [
            'employees' => $employees
        ]);
    }

    public function show(User $employee)
    {
        $employee->append('employee_details');

        return view('admin.employee.show', [
            'employee' => (object)$employee->only([
                'id',
                'name',
                'email',
                'phonenumber',
                'avatar',
                'employee_details'
            ]),
        ]);
    }

    public function create()
    {
        return view('admin.employee.create');
    }

    protected function addEmployeeDetails(User $employee, array $data)
    {
        DB::beginTransaction();
        try {
            foreach ($data as $key => $value) {
                if (!is_null($value)) {
                    $employee->details()->updateOrCreate([
                        'key' => $key
                    ], [
                        'value' => $value
                    ]);
                }
            }
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error($th->getMessage());
            Log::error($th->getTraceAsString());
            throw $th;
        }
        DB::commit();
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

        $this->addEmployeeDetails($user, $data['details']);

        return redirect()->route('admin.employee.index')->with('success', 'Employee added successfully!');
    }

    public function edit(User $employee)
    {
        $employee->append('employee_details');

        return view('admin.employee.edit', [
            'employee' => (object)$employee->only([
                'id',
                'name',
                'email',
                'phonenumber',
                'avatar',
                'employee_details'
            ]),
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

        $this->addEmployeeDetails($user, $data['details']);

        return redirect()->route('admin.employee.index')->with('success', 'Employee updated successfully!');
    }

    public function destroy(User $user)
    {
        $user->delete();
        return back()->with('success', 'Employee deleted successfully!');
    }

    public function uploadDocumentsView(User $user)
    {
        abort_if(!$user->hasRole('employee'), 403, "Can only upload documents for users having `employee` role");
        $user->load('documents');
        return view('admin.employee.upload-document', [
            'employee' => $user,
        ]);
    }

    public function uploadDocuments(User $user, EmployeeDocumentStoreRequest $request)
    {
        abort_if(!$user->hasRole('employee'), 403, "Can only upload documents for users having `employee` role");

        $files = [
            'cnic' => (array)$request->file('cnic'),
            'photograph' => (array)$request->file('pic')
        ];

        if ($request->hasFile('proof')) {
            $files['proof-of-employment'] = (array)$request->file('proof');
        }

        $this->documentService->uploadDocuments($user, $files);

        return redirect()->route('admin.employee.index')->with('success', 'Documents uploaded successfully!!');
    }

    public function deleteDocument(Document $document)
    {
        $document->delete();
        return back()->with('success', 'Document deleted');
    }
}
