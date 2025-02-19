<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sales\Brand\Store;
use App\Http\Requests\Sales\Brand\Update;
use App\Models\Brand;

class BrandController extends Controller
{
    public function all()
    {
        return response()->json([
            'brands' => Brand::with('currency')->orderBy('id', 'asc')->get()->map(function ($brand) {
                return [
                    'id' => $brand->id,
                    'name' => $brand->name,
                    'slug' => $brand->slug,
                    'url' => $brand->url,
                    'fb_url' => $brand->fb_url,
                    'ig_url' => $brand->ig_url,
                    'phone' => $brand->phone,
                    'whatsapp' => $brand->whatsapp,
                    'chat_support' => $brand->chat_support,
                    'country' => $brand->country,
                    'currency' => $brand->currency?->name,
                    'currency_id' => $brand->currency_id,
                    'created_at' => $brand->created_at->format('d M Y, g:i A'),
                    'updated_at' => $brand->updated_at->format('d M Y, g:i A'),
                ];
            })
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = (object) $request->validated();

        $brand = Brand::create([
            'name' => $data->name,
            'slug' => $data->slug,
            'url' => $data->url,
            'fb_url' => $data->fb_url,
            'ig_url' => $data->ig_url,
            'phone' => $data->phone,
            'whatsapp' => $data->whatsapp,
            'chat_support' => $data->chat_support,
            'country' => $data->country,
            'currency_id' => $data->currency,
        ]);

        return response()->json([
            'message' => 'Brand created successfully',
            'success' => true,
            'brand' => [
                'id' => $brand->id,
                'name' => $brand->name,
                'slug' => $brand->slug,
                'url' => $brand->url,
                'fb_url' => $brand->fb_url,
                'ig_url' => $brand->ig_url,
                'phone' => $brand->phone,
                'whatsapp' => $brand->whatsapp,
                'chat_support' => $brand->chat_support,
                'country' => $brand->country,
                'currency' => $brand->currency->name,
                'currency_id' => $brand->currency_id,
                'created_at' => $brand->created_at->format('d M Y, g:i A'),
                'updated_at' => $brand->updated_at->format('d M Y, g:i A'),
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Brand $brand)
    {
        $data = (object) $request->validated();

        $brand->update([
            'name' => $request->name,
            'slug' => $data->slug,
            'url' => $data->url,
            'fb_url' => $data->fb_url,
            'ig_url' => $data->ig_url,
            'phone' => $data->phone,
            'whatsapp' => $data->whatsapp,
            'chat_support' => $data->chat_support,
            'country' => $data->country,
            'currency_id' => $data->currency,
        ]);

        return response()->json([
            'message' => 'Brand updated successfully',
            'success' => true,
            'brand' => [
                'id' => $brand->id,
                'name' => $brand->name,
                'slug' => $data->slug,
                'url' => $brand->url,
                'fb_url' => $brand->fb_url,
                'ig_url' => $brand->ig_url,
                'phone' => $brand->phone,
                'whatsapp' => $brand->whatsapp,
                'chat_support' => $brand->chat_support,
                'country' => $brand->country,
                'currency' => $brand->currency->name,
                'currency_id' => $brand->currency_id,
                'created_at' => $brand->created_at->format('d M Y, g:i A'),
                'updated_at' => $brand->updated_at->format('d M Y, g:i A'),
            ]
        ]);
    }

    public function delete(Brand $brand)
    {
        if ($brand->leads()->exists())
            return response()->json([
                'success' => false,
                'message' => "Brand: {$brand->name} is associated with lead(s). Please delete the corresponding lead first."
            ]);

        $brand->delete();
        return response()->json([
            'success' => true,
            'message' => 'Brand deleted successfully!'
        ]);
    }
}
