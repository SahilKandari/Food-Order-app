import './CartItems.css'
import React from 'react'
import Button from '../UI/Button/Button';

function CartItems(props) {
   return(
    <li className="row my-2 cartItems_list">
        <div className="col-3 modal_list">
          <div className="row">{props.name}</div>
          <div className="row">{props.price}</div>
        </div>
        <div className="col-3 mt-4 text-start cart_spans">
          <span>X</span>
          <span>{props.amount}</span>
        </div>
        <div className="col-6 text-end">
          <Button onClick={props.onRemove} className="cart_itemsButton">-</Button>
          <Button onClick={props.onAdd} className="cart_itemsButton">+</Button>
        </div>
      </li>
   )
}
export default CartItems;