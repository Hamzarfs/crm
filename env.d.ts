import 'vue-router'
declare module 'vue-router' {
    interface RouteMeta {
        [key: string]: any
        action?: string
        subject?: string
        layoutWrapperClasses?: string
        navActiveLink?: RouteLocationRaw
        layout?: 'blank' | 'default'
        unauthenticatedOnly?: boolean
        public?: boolean
    }
}
