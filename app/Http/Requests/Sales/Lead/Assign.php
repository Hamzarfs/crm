<?php

namespace App\Http\Requests\Sales\Lead;

use App\Enums\{DepartmentsEnum, RolesEnum};
use App\Models\User;
use Closure;
use Illuminate\Foundation\Http\FormRequest;

class Assign extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->hasRole([RolesEnum::ADMIN, RolesEnum::TEAM_LEAD]) && $this->user()->hasDepartment(DepartmentsEnum::ADMIN->value, DepartmentsEnum::SALES->value);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'assignedTo' => [
                'required',
                'exists:users,id',
                function (string $attribute, mixed $value, Closure $fail) {
                    $user = User::find($value);
                    if (!$user->hasDepartment(DepartmentsEnum::SALES->value) || !$user->hasRole(RolesEnum::SALES_AGENT))
                        $fail(sprintf("Can only assigned to a %s from %s department.", RolesEnum::SALES_AGENT->label(), DepartmentsEnum::SALES->label()));
                },
            ]
        ];
    }
}
