<?php

namespace App\Http\Requests\Sales\Service;

use App\Enums\RolesEnum;
use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->hasRole([RolesEnum::ADMIN, RolesEnum::TEAM_LEAD]) && $this->user()->hasDepartment('admin', 'sales');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|unique:services'
        ];
    }
}
