<?php

use Illuminate\Support\Str;


if (!function_exists('strToTitleCase')) {
    function strToTitleCase(string $string): string
    {
        return Str::title(str_replace('_', ' ', $string));
    }
}

if (!function_exists('transformEmployeeDetailsToArray')) {
    function transformEmployeeDetailsToArray(array $data): array
    {
        $returnData = [];
        foreach ($data as $value) {
            $returnData[$value['key']] = $value['value'];
        }
        return $returnData;
    }
}
