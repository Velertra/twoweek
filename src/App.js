import React from "react";
import TimeBtns from "./React-handlers.js";
import { DataProvider } from "./data-info.js"; // Import the DataProvider component

function App() {
  return (
    <div className="App">
      <h1>FortStats</h1>
      <DataProvider initialData={/* data */}>
        <TimeBtns />
        <TimeBtns />
      </DataProvider>
    </div>
  );
}

export default App;