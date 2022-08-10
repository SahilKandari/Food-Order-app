import "./HeaderButton.css";
import HeaderCart from "../Cart/HeaderCart";
import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
function HeaderButton(props) {
  const cartCxt = useContext(CartContext);
  const [btnBump, setBtnBump] = useState(false);

  const { item } = cartCxt;

 
  const totalItems = item.reduce(function (acc, current) {
    return acc + current.amount;
  }, 0);

  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [item]);

  const classes =
    `headerButton ${btnBump ? "buttonBump " : " "}` + props.className;

  return (
    <button className={classes} onClick={props.onClick}>
      <span>
        <HeaderCart />
      </span>
      <span>Your Cart</span>
      <span>{totalItems}</span>
    </button>
  );
}
export default HeaderButton;
