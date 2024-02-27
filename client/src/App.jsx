import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import { Link } from "react-router-dom";
import Router from "./utilities/Router";

export default function App() {

  return (
    <>
      {/* <header>
        <nav>
          <h1>Jobarouter</h1>
          <Link to="/">Home</Link> 
        </nav>
      </header> */}
      <Router />
    </>
  );
}
