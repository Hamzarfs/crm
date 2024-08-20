<x-admin>
    @section('title', 'Employees')

    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Update Employee</h3>
                        <div class="card-tools">
                            <a href="{{ route('admin.employee.index') }}" class="btn btn-info btn-sm">Back</a>
                        </div>
                    </div>

                    <form action="{{ route('admin.employee.update', $employee->id) }}" method="POST"
                        enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="mb-3">Required Details</h2>
                                </div>

                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="name" class="form-label">Name</label><span
                                            class="text-danger">*</span>
                                        <input type="text" name="name" id="name"
                                            value="{{ old('name', $employee->name) }}"
                                            class="form-control @error('name') is-invalid @enderror" required>
                                        @error('name')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="email" class="form-label">Email</label><span
                                            class="text-danger">*</span>
                                        <input type="email" name="email" id="email"
                                            value="{{ old('email', $employee->email) }}"
                                            class="form-control @error('email') is-invalid @enderror" required>
                                        @error('email')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="phone" class="form-label">Phone</label><span
                                            class="text-danger">*</span>
                                        <input type="tel" name="phone" id="phone"
                                            value="{{ old('phone', $employee->phonenumber) }}"
                                            class="form-control @error('phone') is-invalid @enderror" required>
                                        @error('phone')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-xl-12 col-md-6">
                                    <div class="form-group">
                                        <label for="picture" class="form-label">Picture</label> <small
                                            class="text-muted"><b>(Not required)</b></small>
                                        <div class="custom-file">
                                            <input type="file"
                                                class="custom-file-input @error('picture') is-invalid @enderror"
                                                id="picture" name="picture" accept=".jpeg,.jpg,.png">
                                            <label class="custom-file-label" for="picture">Choose file</label>
                                            @error('picture')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                        @if ($employee->avatar)
                                            <a href="javascript:void(0)" data-toggle="modal"
                                                data-target="#imageModal">View Image</a>
                                        @endif
                                    </div>
                                </div>


                                <div class="col-12">
                                    <hr class="bg-{{ auth()->user()->mode == 'light' ? 'dark' : 'white' }}">
                                    <h2 class="mb-3">Optional Details</h2>
                                </div>


                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="biometricId" class="form-label">Bio metric ID</label>
                                        <input type="text" name="details[biometricId]" id="biometricId"
                                            value="{{ old('details.biometricId', $employee->employee_details->biometricId ?? '') }}"
                                            class="form-control @error('details.biometricId') is-invalid @enderror">
                                        @error('details.biometricId')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="educationDetails" class="form-label">Education Details</label>
                                        <input type="text" name="details[educationDetails]" id="educationDetails"
                                            value="{{ old('details.educationDetails', $employee->employee_details->educationDetails ?? '') }}"
                                            class="form-control @error('details.educationDetails') is-invalid @enderror">
                                        @error('details.educationDetails')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="salary" class="form-label">Salary</label>
                                        <input type="text" name="details[salary]" id="salary"
                                            value="{{ old('details.salary', $employee->employee_details->salary ?? '') }}"
                                            class="form-control @error('details.salary') is-invalid @enderror">
                                        @error('details.salary')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>


                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="emergencyContactName" class="form-label">Emergency Contact
                                            Name</label>
                                        <input type="text" name="details[emergencyContactName]"
                                            id="emergencyContactName"
                                            value="{{ old('details.emergencyContactName', $employee->employee_details->emergencyContactName ?? '') }}"
                                            class="form-control @error('details.emergencyContactName') is-invalid @enderror">
                                        @error('details.emergencyContactName')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="emergencyContactNumber" class="form-label">Emergency Contact
                                            Number</label>
                                        <input type="text" name="details[emergencyContactNumber]"
                                            id="emergencyContactNumber"
                                            value="{{ old('details.emergencyContactNumber', $employee->employee_details->emergencyContactNumber ?? '') }}"
                                            class="form-control @error('details.emergencyContactNumber') is-invalid @enderror">
                                        @error('details.emergencyContactNumber')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="vehiclePlateNumber" class="form-label">Vehicle plate
                                            number</label>
                                        <input type="text" name="details[vehiclePlateNumber]"
                                            id="vehiclePlateNumber" value="{{ old('details.vehiclePlateNumber', $employee->employee_details->vehiclePlateNumber ?? '') }}"
                                            class="form-control @error('details.vehiclePlateNumber') is-invalid @enderror">
                                        @error('details.vehiclePlateNumber')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>


                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="bloodGroup" class="form-label">Blood Group</label>
                                        <input type="text" name="details[bloodGroup]" id="bloodGroup"
                                            value="{{ old('details.bloodGroup', $employee->employee_details->bloodGroup ?? '') }}"
                                            class="form-control @error('details.bloodGroup') is-invalid @enderror">
                                        @error('details.bloodGroup')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="allergyOrDisease" class="form-label">Any allergy or
                                            disease</label>
                                        <input type="text" name="details[allergyOrDisease]" id="allergyOrDisease"
                                            value="{{ old('details.allergyOrDisease', $employee->employee_details->allergyOrDisease ?? '') }}"
                                            class="form-control @error('details.allergyOrDisease') is-invalid @enderror">
                                        @error('details.allergyOrDisease')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="shiftTimings" class="form-label">Shift Timings</label>
                                        <input type="text" name="details[shiftTimings]" id="shiftTimings"
                                            value="{{ old('details.shiftTimings', $employee->employee_details->shiftTimings ?? '') }}"
                                            class="form-control @error('details.shiftTimings') is-invalid @enderror">
                                        @error('details.shiftTimings')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>


                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="experienceDetails" class="form-label">Experience Details</label>
                                        <input type="text" name="details[experienceDetails]"
                                            id="experienceDetails" value="{{ old('details.experienceDetails', $employee->employee_details->experienceDetails ?? '') }}"
                                            class="form-control @error('details.experienceDetails') is-invalid @enderror">
                                        @error('details.experienceDetails')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="designation" class="form-label">Designation in RFS</label>
                                        <input type="text" name="details[designation]" id="designation"
                                            value="{{ old('details.designation', $employee->employee_details->designation ?? '') }}"
                                            class="form-control @error('details.designation') is-invalid @enderror">
                                        @error('details.designation')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="homeAddress" class="form-label">Home Address</label>
                                        <input type="text" name="details[homeAddress]" id="homeAddress"
                                            value="{{ old('details.homeAddress', $employee->employee_details->homeAddress ?? '') }}"
                                            class="form-control @error('details.homeAddress') is-invalid @enderror">
                                        @error('details.homeAddress')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>


                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="maritalStatus" class="form-label">Marital Status</label>
                                        <input type="text" name="details[maritalStatus]" id="maritalStatus"
                                            value="{{ old('details.maritalStatus', $employee->employee_details->maritalStatus ?? '') }}"
                                            class="form-control @error('details.maritalStatus') is-invalid @enderror">
                                        @error('details.maritalStatus')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="workEmail" class="form-label">Work email</label>
                                        <input type="text" name="details[workEmail]" id="workEmail"
                                            value="{{ old('details.workEmail', $employee->employee_details->workEmail ?? '') }}"
                                            class="form-control @error('details.workEmail') is-invalid @enderror">
                                        <small class="text-muted">(Gmail & Webmail that is logged in your PC)</small>
                                        @error('details.workEmail')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="workEmailPassword" class="form-label">Work email password</label>
                                        <input type="text" name="details[workEmailPassword]"
                                            id="workEmailPassword" value="{{ old('details.workEmailPassword', $employee->employee_details->workEmailPassword ?? '') }}"
                                            class="form-control @error('details.workEmailPassword') is-invalid @enderror">
                                        <small class="text-muted">(Gmail & Webmail that is logged in your PC)</small>
                                        @error('details.workEmailPassword')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>


                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="companyEmail" class="form-label">Company Domain Email</label>
                                        <input type="text" name="details[companyEmail]" id="companyEmail"
                                            value="{{ old('details.companyEmail', $employee->employee_details->companyEmail ?? '') }}"
                                            class="form-control @error('details.companyEmail') is-invalid @enderror">
                                        @error('details.companyEmail')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="companyEmailPassword" class="form-label">Company Domain's Email
                                            Password</label>
                                        <input type="text" name="details[companyEmailPassword]"
                                            id="companyEmailPassword"
                                            value="{{ old('details.companyEmailPassword', $employee->employee_details->companyEmailPassword ?? '') }}"
                                            class="form-control @error('details.companyEmailPassword') is-invalid @enderror">
                                        @error('details.companyEmailPassword')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="pcPassword" class="form-label">PC/Laptop Password</label>
                                        <input type="text" name="details[pcPassword]" id="pcPassword"
                                            value="{{ old('details.pcPassword', $employee->employee_details->pcPassword ?? '') }}"
                                            class="form-control @error('details.pcPassword') is-invalid @enderror">
                                        @error('details.pcPassword')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>


                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="pcDetails" class="form-label">Details of System in use</label>
                                        <input type="text" name="details[pcDetails]" id="pcDetails"
                                            value="{{ old('details.pcDetails', $employee->employee_details->pcDetails ?? '') }}"
                                            class="form-control @error('details.pcDetails') is-invalid @enderror">
                                        @error('details.pcDetails')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="anyPaidPlatform" class="form-label">Any paid platform in
                                            use</label>
                                        <input type="text" name="details[anyPaidPlatform]" id="anyPaidPlatform"
                                            value="{{ old('details.anyPaidPlatform', $employee->employee_details->anyPaidPlatform ?? '') }}"
                                            class="form-control @error('details.anyPaidPlatform') is-invalid @enderror">
                                        @error('details.anyPaidPlatform')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="idAndPasswordOfAnyPaidPlatforms" class="form-label">ID & Password
                                            of paid platform in use</label>
                                        <input type="text" name="details[idAndPasswordOfAnyPaidPlatforms]"
                                            id="idAndPasswordOfAnyPaidPlatforms"
                                            value="{{ old('details.idAndPasswordOfAnyPaidPlatforms', $employee->employee_details->idAndPasswordOfAnyPaidPlatforms ?? '') }}"
                                            class="form-control @error('details.idAndPasswordOfAnyPaidPlatforms') is-invalid @enderror">
                                        <small class="text-muted">Enter in this format: ID-Password</small>
                                        @error('details.idAndPasswordOfAnyPaidPlatforms')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>


                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="peripheralDevices" class="form-label">Any other peripheral device
                                            in use</label>
                                        <input type="text" name="details[peripheralDevices]"
                                            id="peripheralDevices" value="{{ old('details.peripheralDevices', $employee->employee_details->peripheralDevices ?? '') }}"
                                            class="form-control @error('details.peripheralDevices') is-invalid @enderror">
                                        @error('details.peripheralDevices')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="jobType" class="form-label">Job type</label>
                                        <input type="text" name="details[jobType]" id="jobType"
                                            value="{{ old('details.jobType', $employee->employee_details->jobType ?? '') }}"
                                            class="form-control @error('details.jobType') is-invalid @enderror">
                                        @error('details.jobType')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="joiningDate" class="form-label">Joining Date</label>
                                        <input type="date" name="details[joiningDate]" id="joiningDate"
                                            value="{{ old('details.joiningDate', $employee->employee_details->joiningDate ?? '') }}"
                                            class="form-control @error('details.joiningDate') is-invalid @enderror">
                                        @error('details.joiningDate')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>


                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="firstSalaryIncrement" class="form-label">First Salary increment
                                            (Amount & Month)</label>
                                        <input type="text" name="details[firstSalaryIncrement]"
                                            id="firstSalaryIncrement"
                                            value="{{ old('details.firstSalaryIncrement', $employee->employee_details->firstSalaryIncrement ?? '') }}"
                                            class="form-control @error('details.firstSalaryIncrement') is-invalid @enderror">
                                        @error('details.firstSalaryIncrement')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="secondSalaryIncrement" class="form-label">Second Salary increment
                                            (Amount & Month)</label>
                                        <input type="text" name="details[secondSalaryIncrement]"
                                            id="secondSalaryIncrement"
                                            value="{{ old('details.secondSalaryIncrement', $employee->employee_details->secondSalaryIncrement ?? '') }}"
                                            class="form-control @error('details.secondSalaryIncrement') is-invalid @enderror">
                                        @error('details.secondSalaryIncrement')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                        <label for="thirdSalaryIncrement" class="form-label">Third Salary increment
                                            (Amount & Month)</label>
                                        <input type="text" name="details[thirdSalaryIncrement]"
                                            id="thirdSalaryIncrement"
                                            value="{{ old('details.thirdSalaryIncrement', $employee->employee_details->thirdSalaryIncrement ?? '') }}"
                                            class="form-control @error('details.thirdSalaryIncrement') is-invalid @enderror">
                                        @error('details.thirdSalaryIncrement')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" id="submit" class="btn btn-primary float-righta">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    @if ($employee->avatar)
        {{-- View image modal --}}
        <div class="modal fade" id="imageModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">View Image</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src="{{ asset($employee->avatar) }}" alt="" class="d-block m-auto img-fluid">
                    </div>
                    <div class="modal-footer">
                        <span class="text-muted">If you want to change image just add new image otherwise leave
                            it.</span>
                    </div>
                </div>
            </div>
        </div>
    @endif

    @section('js')
        <script></script>
    @endsection
</x-admin>
