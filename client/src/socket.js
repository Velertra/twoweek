import { io } from 'socket.io-client';

const URL = process.env.VITE_SOCKET_PORT/* import.meta.env.VITE_NODE === 'production' ? 'testing123' : 'http://localhost:4000' */ ;

export const socket = io(URL);