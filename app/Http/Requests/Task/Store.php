<?php

namespace App\Http\Requests\Task;

use App\Enums\RolesEnum;
use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->hasRole([RolesEnum::ADMIN, RolesEnum::TEAM_LEAD,RolesEnum::PROJECT_MANAGER]);
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
            'status' => 'required|in:to_do,in_progress,pending,sent_to_client_review,revisions,completed,submit_to_client,archive',
            'assigned_to' => 'required|integer|exists:users,id',
            'files' => 'array|max:5',
            'files.*' => 'file|mimes:jpeg,png,gif,bmp,svg,webp,pdf,doc,docx,xls,xlsx,ppt,pptx,txt'
        ];
    }
}
