<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $query = Order::with(['user', 'product']);

        if ($user->hasRole('admin')) {
            $query = $query->withTrashed();
        } else {
            $query = $query->where('user_id', $user->id);
        }

        $orders = $query->get();

        return view('admin.orders.index', [
            'orders' => $orders
        ]);
    }
}
