import type { RouteRecordRaw } from 'vue-router/auto'

const DashboardComponent = () => import('@/pages/dashboard.vue')

// 👉 Redirects
export const redirects: RouteRecordRaw[] = [
    // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
    {
        path: '/',
        name: 'index',
        redirect: to => {
            const userData = useCookie<Record<string, unknown> | null | undefined>('userData').value

            if (userData)
                return { name: 'dashboard' }
            else
                return { name: 'login', query: to.query }
        },
    },
]

export const routes: RouteRecordRaw[] = [
    // Dashboard
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardComponent,
        meta: {
            navActiveLink: 'dashboard',
            authenticatedOnly: true,
        },
    },
]
