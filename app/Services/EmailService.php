<?php

namespace App\Services;

use App\Mail\SendLogo;
use App\Models\Order;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class EmailService {
    public function sendLogo(Order $order) {
        $adminUsers = User::role('admin')->pluck('email');
        $emails = [...$adminUsers, $order->user->email];

        foreach ($emails as $email) {
            Mail::to($email)->send(new SendLogo($order));
        }
    }
}