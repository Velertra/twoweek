import { io } from 'socket.io-client';

const URL = import.meta.env.VITE_NODE === 'production' ? './' : 'http://localhost:4000';

export const socket = io(URL);