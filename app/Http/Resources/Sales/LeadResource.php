<?php

namespace App\Http\Resources\Sales;

use App\Http\Resources\UserResource;
use App\Models\Brand;
use App\Models\LeadDetail;
use App\Models\Service;
use App\Models\Upsell;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LeadResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'created_by' => $this->whenLoaded('createdBy', new UserResource($this->createdBy)),
            'assigned_by' => $this->whenLoaded('assignedBy', new UserResource($this->assignedBy)),
            'assigned_to' => $this->whenLoaded('assignedTo', new UserResource($this->assignedTo)),
            'services_sold' => $this->whenLoaded(
                'servicesSold',
                $this->servicesSold->map(function (Service $service) {
                    return [
                        'id' => $service->pivot->id,
                        'service_id' => $service->id,
                        'name' => $service->name,
                        'created_at' => $service->pivot->created_at->format('d M Y, g:i A'),
                    ];
                }),
                []
            ),
            'upsells' => $this->whenLoaded(
                'upsells',
                $this->upsells->map(function (Upsell $upsell) {
                    return [
                        'id' => $upsell->id,
                        'service' => $this->when($upsell->relationLoaded('serviceSold'), [
                            'id' => $this->upsell->serviceSold?->id,
                            'name' => $this->upsell->serviceSold?->name,
                        ], []),
                        'remarks' => $upsell->remarks,
                        'amount' => $upsell->amount,
                        'created_at' => $upsell->created_at->format('d M Y, g:i A'),
                    ];
                }),
                []
            ),
            'customer' => $this->whenLoaded('customer', [
                'id' => $this->customer->id,
                'name' => $this->customer->full_name,
                'email' => $this->customer->email,
                'contact' => $this->customer->contact,
                'area' => $this->customer->area,
                'zip' => $this->customer->zip,
                'country' => $this->customer->country,
                'created_at' => $this->customer->created_at->format('d M Y, g:i A'),
            ]),
            'lead_source' => $this->whenLoaded('leadSource', [
                'id' => $this->leadSource->id,
                'name' => $this->leadSource->name,
                'type' => $this->leadSource->type,
            ]),
            'brand' => $this->whenLoaded('brand', fn(Brand $brand) => [
                'id' => $brand->id,
                'name' => $brand->name,
                'country' => $brand->country,
                'currency' => $this->when($brand->relationLoaded('currency'), [
                    'id' => $this->brand->currency->id,
                    'name' => $this->brand->currency->name,
                ], []),
            ]),
            'campaign' => $this->whenLoaded('campaign', [
                'id' => $this->campaign?->id,
                'name' => $this->campaign?->name,
            ]),
            'services_sold_count' => $this->whenCounted('servicesSold', $this->services_sold_count),
            'upsells_count' => $this->whenCounted('upsells', $this->upsells_count),
            'status' => $this->status,
            'remarks' => $this->remarks,
            'lead_closed_date' => $this->lead_closed_date,
            'lead_closed_amount' => $this->lead_closed_amount,
            'created_at' => $this->created_at->format('d M Y, g:i A'),
            'updated_at' => $this->updated_at->format('d M Y, g:i A'),
            'created_at_country' => $this->created_at->timezone($this->brand->country === 'UK' ? 'Europe/London' : 'America/Chicago')->format('d M Y, g:i A') . " ({$this->brand->country})",
            'updated_at_country' => $this->updated_at->timezone($this->brand->country === 'UK' ? 'Europe/London' : 'America/Chicago')->format('d M Y, g:i A') . " ({$this->brand->country})",
            'details' => $this->whenLoaded('details', $this->details->map(function (LeadDetail $leadDetail) {
                return [
                    'id' => $leadDetail->id,
                    'lead_id' => $leadDetail->lead_id,
                    'agent' => $this->when($leadDetail->relationLoaded('agent'), new UserResource($leadDetail->agent), []),
                    'contact_status' => $leadDetail->contact_status,
                    'notes' => $leadDetail->notes,
                    'follow_up' => $leadDetail->follow_up,
                    'final_status' => $leadDetail->final_status,
                    'final_status_date' => $leadDetail->final_status_date,
                    'call_status' => $leadDetail->call_status,
                    'call_date' => $leadDetail->call_date,
                    'email_status' => $leadDetail->email_status,
                    'email_date' => $leadDetail->email_date,
                    'sms_status' => $leadDetail->sms_status,
                    'sms_date' => $leadDetail->sms_date,
                    'created_at' => $leadDetail->created_at->format('d M Y, g:i A'),
                    'updated_at' => $leadDetail->updated_at->format('d M Y, g:i A'),
                ];
            }), []),
        ];
    }
}
