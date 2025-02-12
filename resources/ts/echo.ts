
// declare global {
//     interface Window {
//         Pusher: typeof Pusher
//         Echo: Echo<any>
//     }
// }

// const authStore = useAuthStore()


// window.Pusher = window.Pusher || Pusher;

// window.Echo = window.Echo || new Echo({
//     broadcaster: 'reverb',
//     key: import.meta.env.VITE_REVERB_APP_KEY,
//     wsHost: import.meta.env.VITE_REVERB_HOST,
//     wsPort: import.meta.env.VITE_REVERB_PORT,
//     wssPort: import.meta.env.VITE_REVERB_PORT,
//     forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
//     bearerToken: authStore.token,
// });
