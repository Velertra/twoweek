import React from "react";
import { createRoot } from "react-dom";
import App from "./App.js";
// Import your root component
const root = document.getElementById("root");

const rootInstance = createRoot(root);

rootInstance.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// import "./mainReact.js";
/* import React from "react";
import { createRoot } from "react-dom";
import App from "./react.js"; */

/* const root = createRoot(document.getElementById("root"));
root.render(<App />);
 */

/* function orderTotal(order) {
  return order.items.reduce(
    (prev, cur) => cur.price * (cur.quantity || 1) + prev,
    0,
  );
}

module.exports = orderTotal; */
