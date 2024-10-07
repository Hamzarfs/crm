<?php

namespace App\Models;

use App\Enums\EmployeeStatusesEnum;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens, SoftDeletes, HasRoles, Notifiable;

    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];

    public function guardName()
    {
        return 'api';
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
            'status' => EmployeeStatusesEnum::class
        ];
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function leadingDepartment()
    {
        return $this->hasOne(Department::class, 'leader_id');
    }

    public function hasDepartment(string ...$departments): bool
    {
        $this->load('department:id,name');
        return array_search($this->department->name, $departments, true) !== false;
    }

    function details()
    {
        return $this->hasMany(UserDetail::class);
    }

    protected function employeeDetails(): Attribute
    {
        return new Attribute(
            get: fn() => (object) transformEmployeeDetailsToArray($this->details?->toArray())
        );
    }

    public function leads()
    {
        return $this->hasMany(Lead::class, 'created_by');
    }

    public function createdTasks()
    {
        return $this->hasMany(Task::class, 'created_by');
    }

    public function assignedTasks()
    {
        return $this->hasMany(Task::class, 'assigned_to');
    }

    public function taskComments()
    {
        return $this->hasMany(TaskComment::class, 'created_by');
    }

    /**
     * The channels the user receives notification broadcasts on.
     */
    public function receivesBroadcastNotificationsOn(): string
    {
        return "Task.Created.Notifications.{$this->assigned_to}";
    }
}
