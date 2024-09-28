<?php

namespace App\Http\Controllers;

use App\Http\Requests\Sales\Lead\Store;
use App\Http\Requests\Sales\Lead\Update;
use App\Http\Resources\Collections\Sales\LeadResourceCollection;
use App\Models\Lead;
use App\Models\Upsell;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LeadController extends Controller
{
    /**
     * Display a listing of the leads.
     */
    public function list(Request $request)
    {
        $page = (int) $request->input('page', 1);
        $itemsPerPage = (int) $request->input('itemsPerPage', 10);

        $department = $request->input('department');
        $user = $request->input('user');
        $date = $request->input('date');
        $assignedToMe = $request->input('assignedToMe');
        $status = $request->input('status');
        $query = $request->input('q');

        $orderByColumn = $request->input('sortBy');
        $orderByDir = $request->input('orderBy');

        $leads = Lead::with(['servicesSold', 'upsells.serviceSold', 'customer', 'leadSource', 'brand'])->withCount(['servicesSold', 'upsells']);

        // dd($leads->get()->toArray());



        /**
         * @TODO apply filters later
         */
        // Applying DT filters
        // $leads = $leads->when(
        //     value: $department,
        //     callback: fn(Builder $tasksQuery, $department) => $tasksQuery->whereRelation('assignee', 'department_id', '=', $department)
        // )->when(
        //     value: $user,
        //     callback: fn(Builder $tasksQuery, $user) => $tasksQuery->where(
        //         column: [
        //             ['created_by', '=', $user, 'OR'],
        //             ['assigned_to', '=', $user, 'OR'],
        //         ],
        //     )
        // )->when(
        //     value: $date,
        //     callback: function (Builder $tasksQuery, $date) {
        //         $formattedDate = Carbon::createFromFormat('d-m-Y', $date);
        //         return $tasksQuery->where(fn($q) => $q->whereDate('deadline', '=', $formattedDate)
        //             ->orWhereDate('completed_at', '=', $formattedDate)
        //             ->orWhereDate('started_at', '=', $formattedDate)
        //             ->orWhereDate('created_at', '=', $formattedDate)
        //             ->orWhereDate('updated_at', '=', $formattedDate));
        //     }
        // )->when(
        //     value: $status,
        //     callback: fn(Builder $tasksQuery, $status) => $tasksQuery->where('status', $status)
        // )->when(
        //     value: $assignedToMe,
        //     callback: fn(Builder $tasksQuery, $assignedToMe) => $assignedToMe === 'yes' ? $tasksQuery->where('assigned_to', Auth::id()) : $tasksQuery->where('created_by', Auth::id()),
        // )->when(
        //     value: $query,
        //     callback: fn(Builder $tasksQuery, $query) => $tasksQuery->where(
        //         column: [
        //             ['title', 'LIKE', "%$query%", 'OR'],
        //             ['description', 'LIKE', "%$query%", 'OR'],
        //         ],
        //     )
        // )->when(        // Apply ordering
        //     value: fn() => (!is_null($orderByColumn) && !is_null($orderByDir)) ? ['column' => $orderByColumn, 'dir' => $orderByDir] : null,
        //     callback: fn(Builder $tasksQuery, array $orderBy) => $tasksQuery->orderBy($orderBy['column'], $orderBy['dir'])
        // );

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
        ];

        if (isset($data->lead_closed_date)) {
            $leadAttributes['lead_closed_date'] = $data->lead_closed_date;
        }
        if (isset($data->lead_closed_amount)) {
            $leadAttributes['lead_closed_amount'] = $data->lead_closed_amount;
        }

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
}
