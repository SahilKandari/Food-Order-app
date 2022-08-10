import CartContext from "./cart-context";
import React, { useReducer } from "react";

const initialCartState = { items: [], totalAmount: 0 };
function reducer(state, action) {
  if (action.type === "Add") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  // if (action.type === "AddCart") {
  //   const updatedTotalAmount =
  //     state.totalAmount + action.item.price * action.item.amount;

  //   const existingItemIndex = state.items.findIndex(
  //     (item) => item.id === action.item.id
  //   );
  //   const existingItem = state.items[existingItemIndex];
  //   let updatedItem;
  //   let updatedItems;

  //   if (existingItem) {
  //     updatedItem = {
  //       ...existingItem,
  //       amount: existingItem.amount + 1,
  //     };

  //     updatedItems = [...state.items];
  //     updatedItems[existingItemIndex] = updatedItem;
  //   } else {
  //     updatedItem = { ...action.item };
  //     updatedItems = state.items.concat(action.item);
  //   }
  //   return { items: updatedItems, totalAmount: updatedTotalAmount };
  // }

  if (action.type === "Remove") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "RESET") {
    return initialCartState;
  }
  return  initialCartState ;
}
function ContextProvider(props) {
  const [cartState, dispatchCartState] = useReducer(reducer, initialCartState);

  function addItemCart(items) {
    dispatchCartState({ type: "Add", item: items });
  }
  // function addItemFromCart(itemss) {

  //   dispatchCartState({ type: "AddCart", item: itemss });
  // }
  function removeItemCart(id) {
    dispatchCartState({ type: "Remove", id: id });
  }
function resetItemHandler(){
  dispatchCartState({type:"RESET"})
}
  const cartContextValues = {
    removeItem: removeItemCart,
    addItem: addItemCart,
    item: cartState.items,
    totalAmount: cartState.totalAmount,
    reset: resetItemHandler
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {props.children}
    </CartContext.Provider>
  );
}
export default ContextProvider;
