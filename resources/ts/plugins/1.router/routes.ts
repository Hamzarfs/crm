import type { RouteRecordRaw } from 'vue-router/auto'

const DashboardComponent = () => import('@/pages/dashboard.vue')
const EmployeesComponent = () => import('@/pages/employees/list.vue')
const RolesComponent = () => import('@/pages/roles/list.vue')
const DepartmentsComponent = () => import('@/pages/departments/list.vue')

// 👉 Redirects
export const redirects: RouteRecordRaw[] = [
    // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
    {
        path: '/',
        name: 'index',
        redirect: to => {
            const userData = useCookie<Record<string, unknown> | null | undefined>('userData').value
            const token = useCookie('accessToken').value

            if (userData && token)
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
    // Users
    {
        path: '/employees',
        name: 'employees',
        component: EmployeesComponent,
        meta: {
            navActiveLink: 'employees',
            authenticatedOnly: true,
        },
    },
    // Roles
    {
        path: '/roles',
        name: 'roles',
        component: RolesComponent,
        meta: {
            navActiveLink: 'roles',
            authenticatedOnly: true,
        },
    },
    // Departments
    {
        path: '/departments',
        name: 'departments',
        component: DepartmentsComponent,
        meta: {
            navActiveLink: 'departments',
            authenticatedOnly: true,
        },
    },
    // Tasks
    {
        path: '/tasks',
        name: 'tasks',
        component: DepartmentsComponent,
        meta: {
            navActiveLink: 'tasks',
            authenticatedOnly: true,
        },
    },
]
