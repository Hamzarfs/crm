<?php

namespace App\Http\Requests\Sales\Brand;

use App\Enums\RolesEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class Update extends FormRequest
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
            // 'name' => "required|string|unique:brands,name,{$this->route('brand')->id},id",
            'name' => ['required', 'string', Rule::unique('brands')->ignoreModel($this->route('brand'))],
            'slug' => ['required', 'string', Rule::unique('brands')->ignoreModel($this->route('brand'))],
            'url' => 'required|url',
            'fb_url' => 'url|nullable',
            'ig_url' => 'url|nullable',
            'phone' => 'required|numeric',
            'whatsapp' => 'numeric|nullable',
            'chat_support' => 'string|nullable',
            'country' => 'required|in:USA,UK',
            'currency' => 'required|exists:currencies,id',
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
            'name' => 'Brand name',
            'fb_url' => 'Facebook URL',
            'ig_url' => 'Instagram URL',
        ];
    }
}
