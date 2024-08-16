<?php

namespace App\Models\Employee;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Document extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];
    protected $table = 'employee_documents';

    const UPDATED_AT = null;

    function employee() {
        return $this->belongsTo(User::class, 'employee_id');
    }
}
