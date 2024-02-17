import React from 'react';
import { socket } from '../socket';
import { io } from 'socket.io-client';

export function ConnectionManager() {
  //const socket= io.connect('http://localhost:4000');
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={ connect }>Connect</button>
      <button onClick={ disconnect }>Disconnect</button>
    </>
  );
}