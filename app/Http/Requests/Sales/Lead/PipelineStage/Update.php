<?php

namespace App\Http\Requests\Sales\Lead\PipelineStage;

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
            'name' => ['required', 'string', Rule::unique('lead_pipeline_stages')->ignoreModel($this->route('stage'))],
        ];
    }
}
