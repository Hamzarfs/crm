<?php

use Illuminate\Support\Str;


if (!function_exists('strToTitleCase')) {
    function strToTitleCase(string $string): string
    {
        return Str::title(str_replace('_', ' ', $string));
    }
}
