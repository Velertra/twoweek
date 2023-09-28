function orderTotal(order) {
  return order.items.reduce(
    (prev, cur) => cur.price * (cur.quantity || 1) + prev,
    0,
  );
}

if (
  orderTotal({
    items: [{ name: "dragon candy", price: 2, quantity: 3 }],
  }) !== 6
) {
  throw new Error("check fail: Quantity");
}

if (
  orderTotal({
    items: [{ name: "dragon candy", price: 3 }],
  }) !== 3
) {
  throw new Error("check fail: No quantity specified");
}

if (
  orderTotal({
    items: [
      { name: "Dragon food", price: 8, quantity: 1 },
      { name: "Dragon cage (small)", price: 800, quantity: 1 },
    ],
  }) !== 808
) {
  throw new Error("check fail: Happy path (Example 1)");
}

if (
  orderTotal({
    items: [
      { name: "Dragon collar", price: 20, quantity: 1 },
      { name: "Dragon chew toy", price: 40, quantity: 1 },
    ],
  }) !== 60
) {
  throw new Error("check fail: Happy path (Example 2)");
}