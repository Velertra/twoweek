import { io } from 'socket.io-client';

const URL = /* process.env.NODE === 'production' true ? undefined :*/ 'http://localhost:4000';

export const socket = io(URL);