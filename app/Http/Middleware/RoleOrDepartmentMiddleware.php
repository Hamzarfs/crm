<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleOrDepartmentMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param   Request  $request
     * @param   Closure  $next
     * @param   string   $roles
     * @param   string   $departments
     * @return  Response
     */
    public function handle(Request $request, Closure $next, string $roles, string $departments): Response
    {
        /**
         * @var User $user
         */
        $user = Auth::user();
        $user->load('department:id,name');

        $roles = explode('|', $roles);
        $departments = explode('|', $departments);

        if ($user->hasAnyRole($roles)) {
            return $next($request);
        } else {
            if ($user->hasDepartment(...$departments)) {
                return $next($request);
            } else {
                abort(403, "You doesn't have required Role or Department to access this api.");
            }
        }
    }
}
