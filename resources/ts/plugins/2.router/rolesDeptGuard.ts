import { useAuthStore } from '@core/stores/auth';
import { _RouterTyped, RouteNamedMap } from "unplugin-vue-router";


const authStore = useAuthStore()

export const setupRoleDepartmentGuard = (router: _RouterTyped<RouteNamedMap & { [key: string]: any }>) => {
    router.beforeEach(async (to, from, next) => {
        // Example: Fetch the user's role and department (e.g., from cookies, Pinia, Vuex, or API)
        const userData = authStore.user;

        // Check if the route has role and department restrictions
        const requiredRoles = to.meta?.roles;
        const requiredDepartments = to.meta?.departments;

        // If the route has role restrictions
        if (requiredRoles && !requiredRoles.includes(userData?.role?.value)) {
            next({ name: 'not-authorized' }); // Redirect to forbidden page or error
            return;
        }

        // If the route has department restrictions
        if (requiredDepartments && !requiredDepartments.includes(userData?.department?.value)) {
            next({ name: 'not-authorized' }); // Redirect to forbidden page or error
            return;
        }

        // If everything is fine, continue to the route
        next();
    });
};
