<?php

namespace App\Imports;

use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Concerns\{SkipsEmptyRows, ToCollection, WithHeadingRow};
use PhpOffice\PhpSpreadsheet\Shared\Date;

class EmployeeImport implements ToCollection, SkipsEmptyRows, WithHeadingRow
{
    /**
     * @param Collection $collection
     */
    public function collection(Collection $rows)
    {
        Validator::make(
            data: $rows->toArray(),
            rules: [
                '*.name' => 'required|string',
                '*.personal_email' => 'required|email|unique:users,email',
                '*.contact_number' => 'required|numeric',
                '*.role' => 'exists:roles,id',
                '*.department' => 'exists:departments,id',
            ],
            attributes: [
                '*.name' => 'Name',
                '*.personal_email' => 'Personal email',
                '*.contact_number' => 'Contact number',
                '*.role' => 'role',
                '*.department' => 'department',
            ],
            messages: [
                '*.personal_email.unique' => ":attribute on row :row :input is already taken.",
                '*.*.required' => ":attribute on row :row is empty.",
                '*.*.numeric' => ":attribute on row :row must be a number.",
                '*.*.exists' => 'Invalid :attribute id given on row :row. It Doesn\'t exist in the database.'
            ]
        )->validate();

        foreach ($rows as $row) {
            $employee = User::create([
                'name' => $row['name'],
                'email' => $row['personal_email'],
                'phone' => $row['contact_number'],
                'password' => bcrypt('crm123'),
                'department_id' => $row['department'],
            ])->assignRole($row['role']);

            $employeeDetails = [
                'biometricId' => $row['bio_metric_id'],
                'educationDetails' => $row['education_details'],
                'salary' => $row['salary'],
                'emergencyContactName' => $row['emergency_contact_name'],
                'emergencyContactNumber' => $row['emergency_contact_number'],
                'vehiclePlateNumber' => $row['vehicle_plate_number'],
                'bloodGroup' => $row['blood_group'],
                'allergyOrDisease' => $row['any_allergy_or_disease'],
                'shiftTimings' => $row['shift_timings'],
                'experienceDetails' => $row['experience_detail'],
                'designation' => $row['designation_in_rfs'],
                'homeAddress' => $row['home_address'],
                'maritalStatus' => $row['marital_status'],
                'workEmail' => $row['work_email_using_gmail_and_webmail_that_is_loged_in_your_pc'],
                'workEmailPassword' => $row['work_email_password_using_gmail_and_webmail_that_is_loged_in_your_pc'],
                'companyEmail' => $row['company_domain_email_using'],
                'companyEmailPassword' => $row['domain_emails_password'],
                'pcPassword' => $row['pclaptop_password'],
                'pcDetails' => $row['details_of_system_in_use'],
                'anyPaidPlatform' => $row['any_paid_platform_in_use'],
                'idAndPasswordOfAnyPaidPlatforms' => $row['id_password_of_paid_platform_in_use'],
                'peripheralDevices' => $row['any_other_pheripherial_device_in_use'],
                'jobType' => $row['job_type'],
                'joiningDate' => Date::excelToDateTimeObject($row['joining_date'], config('app.timezone'))->format('d-m-Y'),
                'firstSalaryIncrement' => $row['first_salary_increament_amount_month'],
                'secondSalaryIncrement' => $row['second_salary_increament_amount_month'],
                'thirdSalaryIncrement' => $row['third_salary_increament_amount_month'],
            ];

            foreach ($employeeDetails as $key => $value) {
                $employee->details()->create([
                    'key' => $key,
                    'value' => $value ?? ''
                ]);
            }
        }
    }
}
