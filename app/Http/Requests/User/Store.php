<?php

namespace App\Http\Requests\User;

use App\Enums\EmployeeStatusesEnum;
use App\Enums\RolesEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->hasRole([RolesEnum::ADMIN, RolesEnum::HR]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'department' => 'required|exists:departments,id',
            'phone' => 'required|numeric',
            'role' => 'required|exists:roles,id',
            'status' => ['required', Rule::in(array_column(EmployeeStatusesEnum::class::cases(), 'value'))],
            'details' => 'array',
            'details.*' => 'string|nullable',
        ];
    }
}
