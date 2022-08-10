import React from "react";

const CartContext = React.createContext({
  addItem: () => {},
  removeItem: () => {},
  isShown: () => {},
  notShown: () => {},
  item: [],
  totalAmount: 0,
  reset: () => {},
});
export default CartContext;
