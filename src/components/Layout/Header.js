import "./Header.css";
import React, { Fragment } from "react";
import HeaderMeals from "../../assets/HeaderMeals.jpg";
import HeaderButton from "./HeaderButton";

function Header(props) {
  return (
    <Fragment>
      <div className="row header-main">
        <div className="col-6 ">
          <h1>Food Company</h1>
        </div>
        <div className="col-6 text-center">
          <HeaderButton className="btn" onClick={props.isShown} />
        </div>
      </div>
      <div className="row header-image">
        <img src={HeaderMeals} />
      </div>
    </Fragment>
  );
}
export default Header;
