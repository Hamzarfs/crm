import Echo from 'laravel-echo';
import io from 'socket.io-client';

declare global {
    interface Window {
        io: typeof io
        Echo: Echo
    }
}

window.io = io
window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: 'http://localhost:3000',  // Your Socket.IO server URL
});

// Listen for events on the 'example-channel'
// window.Echo.channel('Example-channel')
//     .listen('.example-event', (data: any) => {
//         console.log(data);
//     });

//     window.Echo.private













// import Echo from 'laravel-echo';
// import io from 'socket.io-client';

// declare global {
//     interface Window {
//         io: typeof io
//         Echo: Echo
//     }
// }

// window.io = io;

// window.Echo = new Echo({
//     broadcaster: 'socket.io',
//     host: 'http://localhost:3000',  // Your Socket.IO server URL
// });

// // Listen for events
// window.Echo.channel('example-channel')
//     .listen('ExampleEvent', (data: any) => {
//         console.log(data);
//     });

// // Emit an event to the server
// window.Echo.connector.socket.emit('example-event', { example: 'data' });
