<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];
    protected $appends = ['full_name'];


    protected function fullName(): Attribute
    {
        return new Attribute(
            get: fn() => "{$this->first_name} {$this->last_name}"
        );
    }

    protected function casts(): array
    {
        return [
            'created_at' => 'date:d M Y, g:i A',
            'updated_at' => 'date:d M Y, g:i A',
            'deleted_at' => 'date:d M Y, g:i A',
        ];
    }
}
