<?php

namespace App\Http\Controllers;

use App\Mail\Email;
use App\Services\Email as EmailService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function send(Request $request): JsonResponse
    {
        $data = $request->all();
        try {
            Mail::to($data['to'])->send(new Email($data));
            $response = [
                'success' => true,
                'message' => 'Email sent successfully'
            ];
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            Log::error($th->getTraceAsString());
            $response = [
                'success' => false,
                'message' => $th->getMessage()
            ];
        }
        return response()->json($response);
    }

    public function fetchFoldersAndMeta(EmailService $emailService)
    {
        return response()->json($emailService->fetchFoldersAndMeta());
    }

    public function fetchMails(EmailService $emailService, string $folder)
    {
        return response()->json($emailService->fetchMails($folder));
    }
}
