import { io } from 'socket.io-client';

const URL = 'https://twoweek-production.up.railway.app' /* import.meta.env.VITE_NODE === 'production' ? 'testing123' : 'http://localhost:4000' */ ;

export const socket = io(URL);