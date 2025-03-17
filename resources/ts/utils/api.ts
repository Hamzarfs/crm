import { useAuthStore } from '@/@core/stores/auth'
import { router } from '@/plugins/2.router'
import { ofetch } from 'ofetch'

const authStore = useAuthStore()


export const $api = ofetch.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
    async onRequest({ options }) {
        const accessToken = authStore.token
        if (accessToken) {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json'
            }
        }
    },
    onResponse({ response }) {
        if (response.status === 401) {
            authStore.$reset()
            router.replace({ name: 'login', query: { to: router.currentRoute.value.path } })
        }
    },
})
