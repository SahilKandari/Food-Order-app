import "./MealsItem.css";
import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealsItem(props) {
  const cartCxt = useContext(CartContext);
  const price = props.price.toFixed(2);

  function addToCart(amounts) {
    cartCxt.addItem({
      id: props.id,
      name: props.name,
      price: price,
      amount: amounts,
    });
  }

  return (
    <li className="list-group-item  meals-item">
      <div className="row">
        <div className="col-7">
          <div className="row">
            <h4>{props.name}</h4>
          </div>
          <div className="row">
            <p>{props.description}</p>
          </div>
          <div className="row">
            <b>{price}</b>
          </div>
        </div>
        <div className="col-5">
          <MealItemForm onaddToCart={addToCart} />
        </div>
      </div>
    </li>
  );
}
export default MealsItem;
