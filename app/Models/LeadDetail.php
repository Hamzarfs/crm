<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class LeadDetail extends Model
{
    protected $guarded = [];

    protected $cast = [
        'call_date' => 'datetime',
        'email_date' => 'datetime',
        'sms_date' => 'datetime',
        'final_status_date' => 'datetime',
    ];

    protected function callDate(): Attribute
    {
        return new Attribute(
            get: fn($value) => $value ? Carbon::parse($value)->format('d M Y, h:i A') : null,
            set: fn($value) => $value ? Carbon::createFromFormat('d-m-Y, h:i A', $value)->format('Y-m-d H:i:s') : null,
        );
    }

    protected function emailDate(): Attribute
    {
        return new Attribute(
            get: fn($value) => $value ? Carbon::parse($value)->format('d M Y, h:i A') : null,
            set: fn($value) => $value ? Carbon::createFromFormat('d-m-Y, h:i A', $value)->format('Y-m-d H:i:s') : null,
        );
    }

    protected function smsDate(): Attribute
    {
        return new Attribute(
            get: fn($value) => $value ? Carbon::parse($value)->format('d M Y, h:i A') : null,
            set: fn($value) => $value ? Carbon::createFromFormat('d-m-Y, h:i A', $value)->format('Y-m-d H:i:s') : null,
        );
    }

    protected function finalStatusDate(): Attribute
    {
        return new Attribute(
            get: fn($value) => $value ? Carbon::parse($value)->format('d M Y, h:i A') : null,
        );
    }

    public function lead()
    {
        return $this->belongsTo(Lead::class);
    }

    public function agent()
    {
        return $this->belongsTo(User::class, 'agent_id');
    }
}
