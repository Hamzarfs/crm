import { Notification } from "@/@layouts/types"

export const useNotificationStore = defineStore('notifications', () => {
    const notifications = ref<Notification[]>([])

    const fetchNotifications = async () => {
        const { notifications: _notifications } = await $api('notfications/all')

        notifications.value = _notifications
    }

    const $reset = () => {
        notifications.value = []
    }

    return { notifications, fetchNotifications, $reset }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useNotificationStore, import.meta.hot))
}

