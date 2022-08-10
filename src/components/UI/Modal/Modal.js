import "./Modal.css";
import React, { Fragment } from "react";
import ReactDom from "react-dom";

import Card from "../Card";
function Modal(props) {
 
  return ReactDom.createPortal(<Fragment>
    <div className= "overlay " onClick={props.onClick}/>
      <Card className = "modal_card">{props.children}</Card>
   </Fragment>,
    document.getElementById("modal-root")
  );
}
export default Modal;
