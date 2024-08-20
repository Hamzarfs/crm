<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserDetail extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected function value(): Attribute {
        return new Attribute(
            get: fn(string $value, array $attributes) => $attributes['key'] == 'joiningDate' ? date('Y-m-d', strtotime($value)) : $value,
        );
    }
}
