import { useAuthStore } from '@core/stores/auth';
import type { RouteNamedMap, _RouterTyped } from 'unplugin-vue-router';

export const setupAuthGuards = (router: _RouterTyped<RouteNamedMap & { [key: string]: any }>) => {
    // 👉 router.beforeEach
    // Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
    router.beforeEach(async (to, from, next) => {
        const authStore = useAuthStore()

        /*
         * If it's a public route, continue navigation. This kind of pages are allowed to visited by login & non-login users. Basically, without any restrictions.
         * Examples of public routes are, 404, under maintenance, etc.
         */
        if (to.meta.public) {
            next()
            return
        }


        /**
         * Check if user is logged in by checking if token & user data exists in cookie storage
         * Feel free to update this logic to suit your needs
         */
        const isLoggedIn = !isNullOrUndefined(authStore.token)
        // const isLoggedIn = !!(useCookie('userData').value && useCookie('accessToken').value)

        if (to.meta?.unauthenticatedOnly) {
            if (isLoggedIn)
                next({ name: 'dashboard' })
            else
                next()
            return
        }


        if (to.meta?.authenticatedOnly) {
            if (!isLoggedIn)
                next({ name: 'login', query: { to: to.path } })
            else
                next()
            return
        }

        next({ name: to.name })
    })
}
