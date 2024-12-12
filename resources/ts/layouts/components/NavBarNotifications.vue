<script lang="ts" setup>
import { useAuthStore } from '@/@core/stores/auth';
import { useNotificationStore } from '@/@core/stores/notification';
import type { Notification } from '@layouts/types';



const notificationStore = useNotificationStore()
const authStore = useAuthStore()

const userData = authStore.user

const notifications = ref<Notification[]>([])

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

const markRead = (notificationId: number[]) => {
    notifications.value.forEach(item => {
        notificationId.forEach(id => {
            if (id === item.id)
                item.isSeen = true
        })
    })
}

const markUnRead = (notificationId: number[]) => {
    notifications.value.forEach(item => {
        notificationId.forEach(id => {
            if (id === item.id)
                item.isSeen = false
        })
    })
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
