<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sales\Brand\Rest;
use App\Models\{Brand, Campaign, Customer, LeadPipelineStage, LeadSource, Service};

class BrandsRestApiController extends Controller
{
    public function createLeadFromBrandFormSubmission(Rest $request, Brand $brand): void
    {
        $data = $request->validated();

        $fullName = explode(' ', trim($data['name']), 2);
        $cxData = [
            'email' => $data['email'],
            'contact' => $data['phone'],
            'first_name' => $fullName[0],
            'last_name' => $fullName[1] ?? '',
        ];
        $customer = Customer::create($cxData);

        $lead_source = LeadSource::where('name', 'Brand')->first();

        $campaign = Campaign::where('name', $data['campaign'])->first();

        $pipelineStage = LeadPipelineStage::query()->first();

        $services_sold = Service::where('name', $data['service'])->first();

        $lead = $brand->leads()->make([
            'status' => 'New lead',
            'remarks' => $data['message']
        ]);
        $lead->customer()->associate($customer);
        $lead->campaign()->associate($campaign);
        $lead->leadSource()->associate($lead_source);
        $lead->pipelineStage()->associate($pipelineStage);

        $lead->save();

        $lead->servicesSold()->sync($services_sold);
    }
}
