import type { VerticalNavItems } from '@layouts/types'

// export default [...dashboard, ...appsAndPages, ...uiElements, ...forms, ...charts, ...others] as VerticalNavItems

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



export default [
    {
        title: 'Dashboard',
        icon: { icon: 'ri-home-smile-line' },
        to: { name: 'dashboard' },
    },
] as VerticalNavItems
