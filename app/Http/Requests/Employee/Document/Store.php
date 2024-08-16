<?php

namespace App\Http\Requests\Employee\Document;

use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return request()->user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'proof' => 'array|max:3',
            'proof.*' => 'file|mimes:pdf,jpg,jpeg,png',
            'cnic' => 'required_if_accepted:isRequired|array|max:3',
            'cnic.*' => 'required_if_accepted:isRequired|file|mimes:pdf,jpg,jpeg,png',
            'pic' => 'required_if_accepted:isRequired|array|max:3',
            'pic.*' => 'required_if_accepted:isRequired|file|mimes:pdf,jpg,jpeg,png',
        ];
    }

    public function attributes()
    {
        return [
            'proof' => 'Proof of Employment',
            'cnic' => 'CNIC',
            'pic' => 'Photograph',
            'proof.*' => 'Proof of Employment',
            'cnic.*' => 'CNIC',
            'pic.*' => 'Photograph',
        ];
    }
}
