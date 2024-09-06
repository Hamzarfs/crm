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
    },
    {
        title: 'Roles',
        icon: { icon: 'ri-lock-2-line' },
        to: { name: 'roles' },
    },
    {
        title: 'Departments',
        icon: { icon: 'ri-building-line' },
        to: { name: 'departments' },
    },
] as VerticalNavItems
