<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BrandController extends Controller
{
    public function all()
    {
        return response()->json([
            'brands' => Brand::orderBy('id', 'asc')->get()->map(function ($brand) {
                return [
                    'id' => $brand->id,
                    'name' => Str::title(str_replace('_', ' ', $brand->name)),
                ];
            })
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $brand = Brand::create([
            'name' => Str::slug($request->name, '_')
        ]);
        
        return response()->json([
            'message' => 'Brand created successfully',
            'success' => true,
            'Brand' => [
                'id' => $brand->id,
                'name' => Str::title(str_replace('_', ' ', $brand->name)),
                
            ]
        ]);

       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Brand $brand)
    {
        $brand->update([
            'name' => Str::slug($request->name, '_', dictionary: ['&' => 'and']),
            
        ]);
      
        return response()->json([
            'message' => 'Brand updated successfully',
            'success' => true,
            'Brand' => [
                'id' => $brand->id,
                'name' => Str::title(str_replace('_', ' ', $brand->name)),
                 
            ]
        ]);
    }

    public function delete(Brand $brand)
    {
        $brand->delete();
        return response()->json([
            'success' => true,
            'message' => 'Brand deleted successfully!'
        ]);
    }
}
