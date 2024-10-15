


export const useAuthStore = defineStore('auth', () => {
    const user = ref<Record<string, any>>({})
    const token = ref('')
    const notifications = ref([])

    const emptyState = () => {
        user.value = {}
        token.value = ''
        notifications.value = []
    }

    return {
        user, token, notifications,
        emptyState,
    }
})



// {
//     state: () => ({
//         authToken: '',
//         user: {},
//         notifications: <any>[],
//     }),
//     // getters: {
//     //     geAuthToken: (state) => state.authToken,
//     //     getAuthenticatedUser: (state): any => state.user,
//     //     getAllNotifications: state => state.notifications,
//     // },
//     actions: {
//         // setAuthToken(token: string) {
//         //     this.authToken = token
//         // },
//         // setAuthenticatedUser(user: any) {
//         //     this.user = user
//         // },
//         // setAllNotifications(notifications: any[]) {
//         //     this.notifications = notifications
//         // },
//         // emptyState() {
//         //     this.authToken = ''
//         //     this.user = []
//         //     this.notifications = []
//         // },
//     },
// }



