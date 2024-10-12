<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    public function list()
    {
        return response()->json([
            'campaigns' => Campaign::select(['id AS value', 'name AS title'])->get()
        ]);
    }
}
