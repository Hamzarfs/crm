<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sales\Service\Store;
use App\Http\Requests\Sales\Service\Update;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Get listing of the Services.
     */
    public function list()
    {
        return response()->json([
            'services' => Service::orderBy('id', 'asc')->get()->map(function ($service) {
                return [
                    'id' => $service->id,
                    'name' => $service->name,
                    'created_at' => $service->created_at->format('d M Y, g:i A'),
                    'updated_at' => $service->updated_at->format('d M Y, g:i A'),
                ];
            })
        ]);
    }

    /**
     * Store a newly created Service.
     */
    public function store(Store $request)
    {
        $data = (object) $request->validated();

        $service = Service::create([
            'name' => $data->name
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Service created successfully!',
            'service' => [
                'id' => $service->id,
                'name' => $service->name,
                'created_at' => $service->created_at->format('d M Y, g:i A'),
                'updated_at' => $service->updated_at->format('d M Y, g:i A'),
            ]
        ]);
    }

    /**
     * Update the specified Service.
     */
    public function update(Update $request, Service $service)
    {
        $data = (object) $request->validated();

        $service->update(['name' => $data->name]);

        return response()->json([
            'success' => true,
            'message' => 'Service updated successfully!',
            'service' => [
                'id' => $service->id,
                'name' => $service->name,
                'created_at' => $service->created_at->format('d M Y, g:i A'),
                'updated_at' => $service->updated_at->format('d M Y, g:i A'),
            ]
        ]);
    }

    /**
     * Remove the specified Service.
     */
    public function delete(Service $service)
    {
        $service->delete();
        return response()->json([
            'success' => true,
            'message' => 'Service deleted successfully!'
        ]);
    }
}
