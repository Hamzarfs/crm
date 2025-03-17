<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Upsell extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function serviceSold()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
}
