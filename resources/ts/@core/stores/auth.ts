export const useAuthStore = defineStore('auth', () => {
    const user = ref<Record<string, any> | undefined>(undefined)
    const token = ref<string | undefined>(undefined)
    const notifications = ref<[] | undefined>(undefined)

    const $reset = () => {
        user.value = undefined
        token.value = undefined
        notifications.value = undefined
    }

    return {
        user, token, notifications, $reset,
    }
}, {
    persist: true
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
