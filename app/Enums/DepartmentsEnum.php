<?php

namespace App\Enums;

enum DepartmentsEnum: string
{
    case ADMIN = 'admin';
    case SALES = 'sales';
    case DEVELOPMENT = 'development';
    case DESIGNING = 'designing';
    case MARKETING = 'marketing';

    public function label(): string
    {
        return match ($this) {
            self::ADMIN => 'Admin',
            self::SALES => 'Sales',
            self::DEVELOPMENT => 'Development',
            self::DESIGNING => 'Designing',
            self::MARKETING => 'Marketing',
        };
    }
}
