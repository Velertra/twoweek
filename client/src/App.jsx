import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import { socket } from "./socket"
import { ConnectionState } from "./components/ConnectionState";
import { Events } from "./components/Events"
import { ConnectionManager } from "./components/ConnectionManager";
import { MyForm } from "./components/MyForm";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  //const server = io.connect('http://localhost:4000')
  
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      console.log('connected')
    }

    function onDisconnect() {
      setIsConnected(false);
      console.log('disconnected')
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
      console.log('foo event')
    }

    socket.on('hello', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('hello', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);


  return (
    <>
      <div className="App">
        <ConnectionState isConnected={ isConnected } />
        <Events events={ fooEvents } />
        <ConnectionManager />
        <MyForm />
      </div>
      {/* <nav>
        <Link to="fullstats">Full Stats</Link>
      </nav> */}
      <MainPage />
    </>
  );
}
