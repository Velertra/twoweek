import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import { Link } from "react-router-dom";
//cqimport {io} from 'socket.io-client';

export default function App() {
  /* const socket = io();
  
  useEffect(() => {
    socket.on('connect', () => {
        console.log('Connected to server');
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });
}, []); */

  return (
    <>
      <nav>
        <Link to="fullstats">Full Stats</Link>
      </nav>
      <MainPage />
    </>
  );
}
