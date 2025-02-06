<?php

namespace App\Http\Controllers;

use App\Mail\Email;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function send(Request $request): JsonResponse
    {
        $data = $request->all();
        // dd($data['files']);
        $response = [];
        if ($sentMail = Mail::to($data['to'])->send(new Email($data))) {
            $response = [
                'success' => true,
                'message' => 'Email sent successfully'
            ];
            // dd($sentMail);
        } else {
            $response = [
                'success' => false,
                'message' => 'Something went wrong! Please try again or contact support.'
            ];
        }
        return response()->json($response);
    }
}
