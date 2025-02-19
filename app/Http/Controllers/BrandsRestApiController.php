<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sales\Brand\Rest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BrandsRestApiController extends Controller
{
    public function createLeadFromBrandFormSubmission(Request $request)
    {
        // Log::info("data", $request->all());
        // return $request->all();
        // dd(123123444);
        // var_dump($request->method());
        // die("Method Check");


        // dd(3123123123, $request->all());
        dd($request->all());
        // $data = $request->validated();

        // dd($data);
    }

    public function abcd()
    {
        dd(1312344446666);
    }
}
