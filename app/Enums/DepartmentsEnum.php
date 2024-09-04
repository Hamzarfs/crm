<?php

namespace App\Enums;

enum DepartmentsEnum: string
{
    case SALES = 'sales';
    case DEVELOPMENT = 'development';
    case DESIGNING = 'designing';
    case MARKETING = 'Marketing';

    public function label(): string
    {
        return match ($this) {
            self::SALES => 'Sales',
            self::DEVELOPMENT => 'Development',
            self::DESIGNING => 'Designing',
            self::MARKETING => 'Marketing',
        };
    }
}
