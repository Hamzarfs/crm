<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DepartmentMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param  \Closure $next
     * @param string[] $departments
     * @return Response
     * 
     */
    public function handle(Request $request, Closure $next, string ...$departments): Response
    {
        $user = $request->user()->load('department:id,name');
        $department = strToTitleCase($user->department->name ?? '');
        abort_if(
            boolean: (is_null($user->department) || (array_search($user->department?->name, $departments, true) === false)),
            code: 403,
            message: "Your department: {$department} doesn't have access to this page."
        );
        return $next($request);
    }
}
