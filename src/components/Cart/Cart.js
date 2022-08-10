import "./Cart.css";
import React, { Fragment, useContext, useState } from "react";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import CardContext from "../../store/cart-context";
import CartItems from "./CartItems";
import Confirmation from "./Confirmation";
import axios from "axios";

function Cart(props) {
  const [onConfirm, setOnConfirm] = useState(false);
  const [totalPriceConfirmation, setTotalPriceConfirmation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cardCxt = useContext(CardContext);
  const totalPrice = cardCxt.totalAmount.toFixed(2);

  const hasItmes = cardCxt.item.length > 0;

  function onAddHandler(item) {
    // cardCxt.addCart(item);
    cardCxt.addItem({ ...item, amount: 1 });
  }
  function onRemoveHandler(id) {
    cardCxt.removeItem(id);
  }

  const confirmOrderHandler = () => {
    setOnConfirm(true);
    setTotalPriceConfirmation(totalPrice);
  };
  const orderConfirmed = (userData) => {
    setIsSubmitting(true);
    axios
      .post(
        "https://food-order-api-2732a-default-rtdb.firebaseio.com/userData.json",
        {
          Name: userData.name,
          aAddress: userData.address,
          Number: userData.number,
          Email: userData.email,
        }
      )
      .then((response) => {
        console.log(response);
      });
    setIsSubmitting(false);
    setIsSubmitted(true);
    cardCxt.reset()
  };
  const cameBackHandler = () => {
    setOnConfirm(false);
  };
  const itemName = cardCxt.item.map((item) => {
    return (
      <CartItems
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onAdd={onAddHandler.bind(null, item)}
        onRemove={onRemoveHandler.bind(null, item.id)}
      />
    );
  });
const resetHandler = ()=>{
  props.notShown()
}
  return (
    <Modal onClick={props.notShown}>
      {" "}
      {isSubmitting && (
        <p className="text-primary text-center my-3">
          Your order is under process
        </p>
      )}
      {isSubmitted && (
        <Fragment>
          <div className="row">
            {" "}
            <h4 className="col-8 text-primary text-center my-3">
              You've orderded successfully...
            </h4>
            <Button onClick={resetHandler} className="col-2 offset-2 mb-2">Close</Button>
          </div>
        </Fragment>
      )}
      {!onConfirm && !isSubmitting && !isSubmitted && (
        <div className="row cart-section">
          <ul>{itemName}</ul>

          <div className="col-6 modal_total my-3">Total</div>
          <div className="col-5 text-end modal_total my-3">{`$${totalPrice}`}</div>

          <div className="cart_button row">
            <div className="col-2 mb-1 ">
              <Button id="button_modal_1" onClick={props.notShown}>
                Close
              </Button>
            </div>
            <div className="col-2 mb-1">
              {hasItmes && (
                <Button onClick={confirmOrderHandler} id="#button_modal_2">
                  Order
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
      {onConfirm && !isSubmitting && !isSubmitted && (
        <Confirmation
          totalPrice={totalPriceConfirmation}
          back={cameBackHandler}
          confirmed={orderConfirmed}
        />
      )}
    </Modal>
  );
}
export default Cart;
