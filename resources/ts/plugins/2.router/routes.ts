import { useAuthStore } from '@core/stores/auth'
import type { RouteRecordRaw } from 'vue-router/auto'

const DashboardComponent = () => import('@/pages/dashboard.vue')
const EmployeesComponent = () => import('@/pages/employees/list.vue')
const RolesComponent = () => import('@/pages/roles/list.vue')
const DepartmentsComponent = () => import('@/pages/departments/list.vue')
const BrandsComponent = () => import('@/pages/brands/list.vue')
const LeadSourcesComponent = () => import('@/pages/leadsources/list.vue')
const TasksComponent = () => import('@/pages/tasks/list.vue')
const TasksKanbanComponent = () => import('@/pages/tasks/kanban.vue')
const ServicesComponent = () => import('@/pages/services/list.vue')
const CustomersComponent = () => import('@/pages/customers/list.vue')
const LeadsComponent = () => import('@/pages/leads/list.vue')
const LeadsKanbanComponent = () => import('@/pages/leads/kanban.vue')






// 👉 Redirects
export const redirects: RouteRecordRaw[] = [
    // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
    {
        path: '/',
        name: 'index',
        redirect: to => {
            const authStore = useAuthStore()
            // console.log('calling for routes ');
            // console.log(authStore.$state);

            // const userData = 'authStore.user'
            // const token = 'authStore.token'
            const userData = authStore.user
            const token = authStore.token

            // console.log(userData);
            // console.log(token);


            // const userData = useCookie<Record<string, unknown> | null | undefined>('userData').value
            // const token = useCookie('accessToken').value

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
            roles: ['admin', 'hr'],
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
            roles: ['admin', 'hr'],
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
            roles: ['admin', 'hr'],
        },
    },
    // Tasks
    {
        path: '/tasks',
        name: 'tasks',
        component: TasksComponent,
        meta: {
            navActiveLink: 'tasks',
            authenticatedOnly: true,
        },
    },
    {
        path: '/tasks-kanban',
        name: 'tasks-kanban',
        component: TasksKanbanComponent,
        meta: {
            navActiveLink: 'tasks-kanban',
            authenticatedOnly: true,
        },
    },
    // /SAlES ROUTES
    {
        path: '/sales',
        name: 'sales',
        meta: {
            authenticatedOnly: true,
            departments: ['admin', 'sales', 'lead_generation'],
        },
        children: [
            {
                path: 'brands',
                name: 'brands',
                component: BrandsComponent,
                meta: {
                    navActiveLink: 'brands',
                    roles: ['admin', 'team_lead'],
                    departments: ['admin', 'sales'],
                },
            },
            {
                path: 'lead-sources',
                name: 'lead-sources',
                component: LeadSourcesComponent,
                meta: {
                    navActiveLink: 'lead-sources',
                    roles: ['admin', 'team_lead'],
                    departments: ['admin', 'sales',],
                },
            },
            {
                path: 'services',
                name: 'services',
                component: ServicesComponent,
                meta: {
                    navActiveLink: 'services',
                    roles: ['admin', 'team_lead'],
                    departments: ['admin', 'sales',],
                },
            },
            {
                path: 'customers',
                name: 'customers',
                component: CustomersComponent,
                meta: {
                    navActiveLink: 'customers',
                },
            },
            {
                path: 'leads',
                name: 'leads',
                component: LeadsComponent,
                meta: {
                    navActiveLink: 'leads',
                },
            },
            {
                path: 'leads-kanban',
                name: 'leads-kanban',
                component: LeadsKanbanComponent,
                meta: {
                    navActiveLink: 'leads',
                },
            },
        ],
    },
]
