<?php

namespace App\Enums;

enum RolesEnum: string
{

    case ADMIN = 'admin';
    case EMPLOYEE = 'employee';
    case HR = 'hr';
    case TEAM_LEAD = 'team_lead';
    case ACCOUNT_MANAGER = 'account_manager';
    case ACCOUNTANT = 'accountant';
    case SALES_AGENT = 'sales_agent';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            self::ADMIN => 'Admin',
            self::EMPLOYEE => 'Employee',
            self::HR => 'HR',
            self::TEAM_LEAD => 'Team Lead',
            self::ACCOUNT_MANAGER => 'Account Manager',
            self::ACCOUNTANT => 'Accountant',
            self::SALES_AGENT => 'Sales Agent',
        };
    }
}
