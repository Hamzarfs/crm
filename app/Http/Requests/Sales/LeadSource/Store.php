<?php

namespace App\Http\Requests\Sales\LeadSource;

use App\Enums\RolesEnum;
use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->hasDepartment('admin', 'sales') && $this->user()->hasRole([RolesEnum::ADMIN, RolesEnum::TEAM_LEAD]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|unique:lead_sources',
            'type' => 'required|string|in:paid,unpaid',
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'name' => 'Lead source name',
            'type' => 'Lead source type',
        ];
    }
}
