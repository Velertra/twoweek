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

  return (
    <>
      {/* <nav>
        <Link to="fullstats">Full Stats</Link>
      </nav> */}
      <MainPage />
    </>
  );
}
