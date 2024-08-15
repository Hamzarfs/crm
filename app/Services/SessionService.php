<?php

namespace App\Services;

class SessionService
{
    public function clearSessionData() : void
    {
        session()->forget([
            'company',
            'colors',
            'font',
            'category',
            'image',
            'product-id',
            'price',
            'package-name'
        ]);
    }
}
