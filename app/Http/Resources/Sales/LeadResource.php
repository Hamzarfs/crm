<?php

namespace App\Http\Resources\Sales;

use App\Models\Service;
use App\Models\Upsell;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

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
                        'service' => $this->when($upsell->serviceSold()->exists(), [
                            'id' => $upsell->serviceSold?->id,
                            'name' => $upsell->serviceSold?->name,
                        ], []),
                        'remarks' => $upsell->remarks,
                        'amount' => number_format($upsell->amount, 2),
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
            ]),
            'brand' => $this->whenLoaded('brand', [
                'id' => $this->brand->id,
                'name' => $this->brand->name,
            ]),
            'services_sold_count' => $this->whenCounted('servicesSold', $this->services_sold_count),
            'upsells_count' => $this->whenCounted('upsells', $this->upsells_count),
            'status' => $this->status,
            'remarks' => $this->remarks,
            'lead_closed_date' => $this->lead_closed_date,
            'lead_closed_amount' => $this->lead_closed_amount,
            'created_at' => $this->created_at->format('d M Y, g:i A'),
            'updated_at' => $this->updated_at->format('d M Y, g:i A'),
        ];
    }
}
