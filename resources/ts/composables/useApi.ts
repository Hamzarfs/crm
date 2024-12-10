import { useAuthStore } from '@/@core/stores/auth'
import { router } from '@/plugins/2.router'
import { createFetch } from '@vueuse/core'
import { destr } from 'destr'

const authStore = useAuthStore()

export const useApi = createFetch({
    baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
    fetchOptions: {
        headers: {
            Accept: 'application/json',
        },
    },
    options: {
        refetch: true,
        async beforeFetch({ options }) {
            const accessToken = authStore.token
            if (accessToken) {
                options.headers = {
                    ...options.headers,
                    Authorization: accessToken,
                }
            }
            return { options }
        },
        afterFetch({ data, response }) {
            // Parse data if it's JSON
            let parsedData = null
            try {
                parsedData = destr(data)
            }
            catch (error) {
                console.error(error)
            }

            return { data: parsedData, response }
        },
        onFetchError: (context) => {
            if (context.response?.status === 401) {
                authStore.$reset()
                router.replace({ name: 'login', query: { to: router.currentRoute.value.path } })
            }
            return context
        },
    },
})
