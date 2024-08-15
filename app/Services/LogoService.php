<?php

namespace App\Services;

use Illuminate\Support\Facades\File;

class LogoService
{
    public function saveLogo(string $logoString, int $userId, int $productId): void
    {
        list($type, $logoEncodedString) = explode(';', $logoString);
        list(, $extension) = explode('/', $type);
        list(, $logoEncodedString) = explode(',', $logoEncodedString);
        $logoString = base64_decode($logoEncodedString);
        $fileName = "{$userId}_{$productId}.{$extension}";
        $fullPath = public_path("orders/$fileName");
        File::ensureDirectoryExists(public_path('orders'));
        if (File::exists($fullPath)) {
            File::delete($fullPath);
        }
        File::put($fullPath, $logoString);
    }
}
