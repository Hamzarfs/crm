<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sales\Customer\Store;
use App\Http\Requests\Sales\Customer\Update;
use App\Models\Customer;

class CustomerController extends Controller
{
    /**
     * Get listing of the Customers.
     */
    public function list()
    {
        return response()->json([
            'customers' => Customer::all(),
        ]);
    }

    /**
     * Store a newly created Customer.
     */
    public function store(Store $request)
    {
        $data = (object) $request->validated();

        $customer = Customer::create([
            'first_name' => $data->first_name,
            'last_name' => $data->last_name,
            'email' => $data->email,
            'contact' => $data->contact,
            'area' => $data->area,
            'zip' => $data->zip,
            'country' => $data->country,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Customer created successfully!',
            'customer' => $customer,
        ]);
    }

    /**
     * Update the specified Customer.
     */
    public function update(Update $request, Customer $customer)
    {
        $data = $request->validated();

        $customer->update($data);

        return response()->json([
            'success' => true,
            'message' => 'Customer updated successfully!',
            'customer' => $customer,
        ]);
    }

    /**
     * Remove the specified Customer.
     */
    public function delete(Customer $customer)
    {
        if ($customer->leads()->exists())
            return response()->json([
                'success' => false,
                'message' => "Customer: {$customer->full_name} is associated with lead(s). Please delete the corresponding lead first."
            ]);

        $customer->delete();
        return response()->json([
            'success' => true,
            'message' => 'Customer deleted successfully!'
        ]);
    }
}
