<?php

namespace App\Http\Controllers;

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
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Lead $lead)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lead $lead)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lead $lead)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lead $lead)
    {
        //
    }
}
