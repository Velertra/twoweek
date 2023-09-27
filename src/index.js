// import "./mainReact.js";
// import "./mainReact.js";
/* import React from "react";
import { createRoot } from "react-dom";
import App from "./react.js"; */

/* const root = createRoot(document.getElementById("root"));
root.render(<App />);
 */

function orderTotal(order) {
  return order.items.reduce(
    (prev, cur) => cur.price * (cur.quantity || 1) + prev,
    0,
  );
}
/* 
module.exports = orderTotal; */
export default orderTotal;
