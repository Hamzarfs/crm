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
            'brands' => Brand::orderBy('id', 'asc')->get()->map(function ($brand) {
                return [
                    'id' => $brand->id,
                    'name' => $brand->name,
                ];
            })
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $brand = Brand::create([
            'name' => $request->name
        ]);

        return response()->json([
            'message' => 'Brand created successfully',
            'success' => true,
            'brand' => [
                'id' => $brand->id,
                'name' => $brand->name,

            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Brand $brand)
    {
        $brand->update([
            'name' => $request->name,

        ]);

        return response()->json([
            'message' => 'Brand updated successfully',
            'success' => true,
            'brand' => [
                'id' => $brand->id,
                'name' => $brand->name,

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
