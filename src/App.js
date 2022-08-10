import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import ContextProvider from "./store/ContextProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  function showCartHandler() {
    setIsCartShown(true);
  }
  function hideCartHandler() {
    setIsCartShown(false);
  }

  return (
    <ContextProvider>
      <div className="container-fluid">
        <Header isShown ={showCartHandler} />
        <Meals />
        {isCartShown && <Cart notShown={hideCartHandler} />}
      </div>
    </ContextProvider>
  );
}

export default App;
