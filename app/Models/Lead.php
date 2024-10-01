<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Lead extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function servicesSold()
    {
        return $this->belongsToMany(Service::class, 'leads_sold_services')->withTimestamps()->withPivot('id');
    }

    public function upsells()
    {
        return $this->hasMany(Upsell::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function leadSource()
    {
        return $this->belongsTo(LeadSource::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function leadClosedDate(): Attribute
    {
        return new Attribute(
            get: fn($value) => $value ? Carbon::parse($value)->format('d M Y') : null,
            set: fn($value) => $value ? Carbon::createFromFormat('d-m-Y', $value)->format('Y-m-d') : null
        );
    }
}
