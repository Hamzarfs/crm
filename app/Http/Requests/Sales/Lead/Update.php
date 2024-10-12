<?php

namespace App\Http\Requests\Sales\Lead;

use Illuminate\Foundation\Http\FormRequest;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->hasDepartment('admin', 'sales', 'lead_generation');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'customer' => ['required', 'exists:customers,id'],
            'lead_source' => ['required', 'exists:lead_sources,id'],
            'brand' => ['required', 'exists:brands,id'],
            'status' => ['required', 'string'],
            'remarks' => ['string', 'nullable'],
            'lead_closed_date' => ['date', 'date_format:d-m-Y', 'nullable', 'required_with:lead_closed_amount'],
            'lead_closed_amount' => ['numeric', 'decimal:0,2', 'nullable', 'required_with:lead_closed_date'],
            'services' => ['required', 'array'],
            'services.*' => ['required', 'exists:services,id'],
        ];
    }
}
