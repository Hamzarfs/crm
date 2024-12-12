export const useAuthStore = defineStore('auth', () => {
    const user = ref<Record<string, any> | undefined>(undefined)
    const token = ref<string | undefined>(undefined)

    const $reset = () => {
        user.value = undefined
        token.value = undefined
    }

    return {
        user, token, $reset,
    }
}, {
    persist: true
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
