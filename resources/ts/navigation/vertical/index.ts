import type { VerticalNavItems } from '@layouts/types'

/**
 *     { heading: 'Apps & Pages' }, => NavSectionTitle
 * 
 *     {   => NavGroup
            title: 'Ecommerce',
            icon: { icon: 'ri-shopping-bag-3-line' },
            children: [
                {
                    title: 'Product',
                    children: [
                        { title: 'List', to: 'apps-ecommerce-product-list' },
                        { title: 'Add', to: 'apps-ecommerce-product-add' },
                        { title: 'Category', to: 'apps-ecommerce-product-category-list' },
                    ],
                },
            ],
        },

        {  => NavLink
            title: 'Form Layouts',
            icon: { icon: 'ri-layout-4-line' },
            to: 'forms-form-layouts',
        },
 *      
 */

// export default [...dashboard, ...appsAndPages, ...uiElements, ...forms, ...charts, ...others] as VerticalNavItems

export default [
    {
        title: 'Dashboard',
        icon: { icon: 'ri-home-smile-line' },
        to: { name: 'dashboard' },
    },
    {
        title: 'Employees',
        icon: { icon: 'ri-user-line' },
        to: { name: 'employees' },
        role: ['admin', 'hr'],
    },
    {
        title: 'Roles',
        icon: { icon: 'ri-lock-2-line' },
        to: { name: 'roles' },
        role: ['admin'],
    },
    {
        title: 'Departments',
        icon: { icon: 'ri-building-line' },
        to: { name: 'departments' },
        role: ['admin'],
    },
    {
        title: 'Tasks',
        icon: { icon: 'ri-task-line' },
        to: { name: 'tasks' },
    },
    {
        heading: 'Sales Management',
        department: ['sales', 'admin', 'lead_generation'],
    },
    {
        title: 'Sales',
        icon: { icon: 'ri-money-dollar-circle-line' },
        department: ['sales', 'admin', 'lead_generation'],
        children: [
            {
                title: 'Brands',
                to: { name: 'brands' },
                role: ['admin', 'team_lead'],
                department: ['admin', 'sales'],
            },
            {
                title: 'Services',
                to: { name: 'services' },
                role: ['admin', 'team_lead'],
                department: ['admin', 'sales'],

            },
            {
                title: 'Lead Sources',
                to: { name: 'lead-sources' },
                role: ['admin', 'team_lead'],
                department: ['admin', 'sales'],
            },
            {
                title: 'Customers',
                to: { name: 'customers' },
            },
            {
                title: 'Leads',
                to: { name: 'leads' },
            },
        ],
    },
] as VerticalNavItems
