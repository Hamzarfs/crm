import Redis from 'ioredis';
import { Server } from 'socket.io';

// Initialize Socket.IO server with CORS enabled
const io = new Server(3000, {
    cors: {
        origin: 'https://crm.test'
    },
});

// Initialize Redis client
const redis = new Redis();

// Listen to Redis events broadcast by Laravel
redis.psubscribe('*').then((count) => {
    console.log(`Subscribed to ${count} channel(s).`);
}).catch((err) => {
    console.error('Failed to subscribe:', err);
});

// Handle incoming Redis events and broadcast them to Socket.IO clients
redis.on('pmessage', (pattern, channel, message) => {
    console.log(pattern);
    console.log(channel);
    console.log(message);
    console.log(parsedMessage);
    try {
        const parsedMessage = JSON.parse(message);

        io.emit(channel, parsedMessage);
    } catch (error) {
        console.error('Failed to parse message:', error);
    }
});

// Handle client connections to Socket.IO
io.on('connection', (socket) => {
    console.log('A user connected');
});
