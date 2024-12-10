<script lang="ts" setup>
import { useAuthStore } from '@/@core/stores/auth';
import type { Notification } from '@layouts/types';



const authStore = useAuthStore()

const notifications = ref<Notification[]>(authStore.notifications as Notification[])


// window.Echo.private(`Task.Assigned.${userData.id}`)
//     .notification((notification: any) => {
//         console.log(notification);

//     })
// window.Echo.private(`App.Models.Task.${userData.id}`)
//     .notification((notification: any) => {
//         console.log(notification);

//     })

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
