<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected function value(): Attribute
    {
        return new Attribute(
            get: fn(string $value, array $attributes) => $attributes['key'] == 'joiningDate' ? date('Y-m-d', strtotime($value)) : $value,
        );
    }
}
