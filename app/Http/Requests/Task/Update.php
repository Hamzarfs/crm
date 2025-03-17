<?php

namespace App\Http\Requests\Task;

use App\Enums\RolesEnum;
use Illuminate\Foundation\Http\FormRequest;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->hasRole([RolesEnum::ADMIN, RolesEnum::TEAM_LEAD]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'description' => 'required|string',
            'deadline' => 'required|date|after_or_equal:today',
            'status' => 'required|in:pending,in_progress,completed',
            'assigned_to' => 'required|integer|exists:users,id',
        ];
    }
}
