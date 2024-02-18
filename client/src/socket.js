import { io } from 'socket.io-client';

const URL = import.meta.env.VITE_NODE === 'production' ? import.meta.env.VITE_SOCKET_PORT : 'http://localhost:4000';

export const socket = io(URL);