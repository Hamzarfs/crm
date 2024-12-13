<script lang="ts" setup>
import { useAuthStore } from '@/@core/stores/auth';
import { useNotificationStore } from '@/@core/stores/notification';
import '@/echo';
import type { Notification } from '@layouts/types';




const notificationStore = useNotificationStore()
const authStore = useAuthStore()

const userData = authStore.user

const notifications = ref<Notification[]>([])

const $toast = useToast()

notificationStore.fetchNotifications()
    .then(() => {
        notifications.value = notificationStore.notifications
    })

window.Echo.private(`Task.Assigned.${userData?.id}`)
    .notification((notification: any) => {
        notifications.value.unshift(notification)
    })

const removeNotification = (notificationId: number) => {
    notifications.value.forEach((item, index) => {
        if (notificationId === item.id)
            notifications.value.splice(index, 1)
    })
}

const markRead = async (notificationId: number[]) => {
    notifications.value.forEach(item => {
        notificationId.forEach(id => {
            if (id === item.id)
                item.isSeen = true
        })
    })

    const { success, message } = await $api('notifications/read', {
        method: 'POST',
        body: { ids: notificationId }
    })

    if (success)
        $toast.success(message)
    else
        $toast.error(message ?? 'Something went wrong. Please try again or contact support.')

}

const markUnRead = async (notificationId: number[]) => {
    notifications.value.forEach(item => {
        notificationId.forEach(id => {
            if (id === item.id)
                item.isSeen = false
        })
    })

    const { success, message } = await $api('notifications/unread', {
        method: 'POST',
        body: { ids: notificationId }
    })

    if (success)
        $toast.success(message)
    else
        $toast.error(message ?? 'Something went wrong. Please try again or contact support.')
}

const handleNotificationClick = (notification: Notification) => {
    if (!notification.isSeen)
        markRead([notification.id])
}
</script>

<template>
    <Notifications :notifications="notifications" @remove="removeNotification" @read="markRead" @unread="markUnRead"
        @click:notification="handleNotificationClick" />
</template>
