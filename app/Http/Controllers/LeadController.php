<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sales\Lead\Store;
use App\Http\Requests\Sales\Lead\Update;
use App\Http\Resources\Collections\Sales\LeadResourceCollection;
use App\Models\Lead;
use App\Models\LeadStatus;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class LeadController extends Controller
{
    /**
     * Display a listing of the leads.
     */
    public function list(Request $request)
    {
        $page = (int) $request->input('page', 1);
        $itemsPerPage = (int) $request->input('itemsPerPage', 10);

        $users = $request->input('users');
        $customers = $request->input('customers');
        $leadSources = $request->input('leadSources');
        $brands = $request->input('brands');
        $services = $request->input('services');
        $statuses = $request->input('statuses');
        $remarks = $request->input('remarks');
        $leadClosedDateRange = $request->input('leadClosedDateRange');
        $createdAtRange = $request->input('createdAtRange');
        $leadClosedAmount = $request->input('leadClosedAmount');

        if ($leadClosedDateRange)
            $leadClosedDateRange = explode(' to ', $request->input('leadClosedDateRange'));
        if ($createdAtRange)
            $createdAtRange = explode(' to ', $request->input('createdAtRange'));

        $orderByColumn = $request->input('sortBy');
        $orderByDir = $request->input('orderBy');

        $leads = Lead::with(['servicesSold', 'upsells.serviceSold', 'customer', 'leadSource', 'brand', 'createdBy'])->withCount(['servicesSold', 'upsells']);

        // Applying DT filters
        $leads = $leads->when(
            value: $users,
            callback: fn(Builder $leadsQuery, array $users) => $leadsQuery->whereHas('createdBy', fn(Builder $userQuery) => $userQuery->whereIn('id', $users))
        )->when(
            value: $customers,
            callback: fn(Builder $leadsQuery, array $customers) => $leadsQuery->whereHas('customer', fn(Builder $customerQuery) => $customerQuery->whereIn('id', $customers))
        )->when(
            value: $leadSources,
            callback: fn(Builder $leadsQuery, array $leadSources) => $leadsQuery->whereHas('leadSource', fn(Builder $leadSourceQuery) => $leadSourceQuery->whereIn('id', $leadSources))
        )->when(
            value: $brands,
            callback: fn(Builder $leadsQuery, array $brands) => $leadsQuery->whereHas('brand', fn(Builder $brandQuery) => $brandQuery->whereIn('id', $brands))
        )->when(
            value: $services,
            callback: fn(Builder $leadsQuery, array $services) => $leadsQuery->whereHas('servicesSold', fn(Builder $servicesSoldQuery) => $servicesSoldQuery->whereIn('service_id', $services))
        )->when(
            value: $statuses,
            callback: fn(Builder $leadsQuery, array $statuses) => $leadsQuery->whereIn('status', $statuses)
        )->when(
            value: $remarks,
            callback: fn(Builder $leadsQuery, string $remarks) => $leadsQuery->where('remarks', 'LIKE', "%$remarks%")
        )->when(
            value: fn() => $leadClosedDateRange ? array_map(fn(string $leadClosedDate) => Carbon::createFromFormat('d-m-Y', $leadClosedDate)->format('Y-m-d'), $leadClosedDateRange) : null,
            callback: fn(Builder $leadsQuery, array $leadClosedDateRange) => count($leadClosedDateRange) > 1 ?
                $leadsQuery->whereBetween('lead_closed_date', $leadClosedDateRange) :
                $leadsQuery->whereDate('lead_closed_date', '>=', $leadClosedDateRange[0])
        )->when(
            value: fn() => $createdAtRange ? array_map(fn(string $createdAtDateTime) => Carbon::createFromFormat('d-m-Y, h:i A', $createdAtDateTime)->format('Y-m-d H:i:s'), $createdAtRange) : null,
            callback: fn(Builder $leadsQuery, array $createdAtRange) => count($createdAtRange) > 1 ?
                $leadsQuery->whereBetween('created_at', $createdAtRange) :
                $leadsQuery->whereDate('created_at', '>=', $createdAtRange[0])
        )->when(
            value: $leadClosedAmount,
            callback: fn(Builder $leadsQuery, string $leadClosedAmount) => $leadsQuery->where('lead_closed_amount', '>=', "$leadClosedAmount")
        )->when(        // Apply ordering
            value: fn() => (!is_null($orderByColumn) && !is_null($orderByDir)) ? ['column' => $orderByColumn, 'dir' => $orderByDir] : null,
            callback: fn(Builder $tasksQuery, array $orderBy) => $tasksQuery->orderBy($orderBy['column'], $orderBy['dir'])
        );

        // Apply pagination
        $paginatedLeads = $leads->paginate($itemsPerPage, page: $page);
        $currentPage = $paginatedLeads->currentPage();
        $lastPage = $paginatedLeads->lastPage();
        $total = $paginatedLeads->total();

        $leads = new LeadResourceCollection($paginatedLeads);

        return response()->json([
            'leads' => $leads,
            'totalLeads' => $total,
            'page' => ($currentPage <= $lastPage) ? $currentPage : $lastPage,
            'totalPages' => $lastPage,
        ]);
    }

    /**
     * Store a newly created Lead in DB.
     */
    public function store(Store $request)
    {
        $data = (object) $request->validated();

        $leadAttributes = [
            'created_by' => Auth::id(),
            'customer_id' => $data->customer,
            'lead_source_id' => $data->lead_source,
            'brand_id' => $data->brand,
            'status' => $data->status,
            'remarks' => $data->remarks ?? '',
        ];

        if (isset($data->lead_closed_date)) {
            $leadAttributes['lead_closed_date'] = $data->lead_closed_date;
        }
        if (isset($data->lead_closed_amount)) {
            $leadAttributes['lead_closed_amount'] = $data->lead_closed_amount;
        }

        $lead = Lead::create($leadAttributes);

        $lead->servicesSold()->attach($data->services);

        return response()->json([
            'success' => true,
            'message' => 'Lead created successfully!'
        ]);
    }

    /**
     * Update the specified lead in DB.
     */
    public function update(Update $request, Lead $lead)
    {
        $data = (object) $request->validated();

        $leadAttributes = [
            'customer_id' => $data->customer,
            'lead_source_id' => $data->lead_source,
            'brand_id' => $data->brand,
            'status' => $data->status,
            'remarks' => $data->remarks ?? '',
            'lead_closed_date' => $data->lead_closed_date,
            'lead_closed_amount' => $data->lead_closed_amount,
        ];

        $lead->update($leadAttributes);

        $lead->servicesSold()->sync($data->services);

        return response()->json([
            'success' => true,
            'message' => 'Lead updated successfully!'
        ]);
    }

    /**
     * Remove the specified lead from DB.
     */
    public function delete(Lead $lead)
    {
        $lead->servicesSold()->detach();
        $lead->upsells()->delete();
        $lead->delete();

        return response()->json([
            'success' => true,
            'message' => 'Lead deleted successfully!'
        ]);
    }

    /**
     * Get Leads widgets count
     */
    public function leadCount()
    {
        $totalLeads = Lead::count();

        $thisMonth = now();
        $startOfThisMonth = $thisMonth->startOfMonth()->format('Y-m-d H:i:s');
        $endOfThisMonth = $thisMonth->endOfMonth()->format('Y-m-d H:i:s');

        $leadsThisMonth = Lead::whereBetween('created_at', [$startOfThisMonth, $endOfThisMonth])->count();

        $closedLeads = Lead::whereNotNull('lead_closed_date')->count();

        $totalAmount = Lead::select('lead_closed_amount')->withSum('upsells', 'amount')->get()->sum(fn(Lead $lead) => $lead->lead_closed_amount + $lead->upsells_sum_amount);

        return response()->json([
            'totalLeads' => $totalLeads,
            'leadsThisMonth' => $leadsThisMonth,
            'closedLeads' => $closedLeads,
            'totalAmount' => $totalAmount,
        ]);
    }

    public function getLeadStatuses()
    {
        return response()->json([
            'statuses' => LeadStatus::pluck('name')
        ]);
    }
}
