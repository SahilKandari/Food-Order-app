import "./MealItemForm.css";
import React, { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

function MealItemForm(props) {
  const inputRef = useRef("");
  const [amountIsValid, setAmountIsValid] = useState(true);
  function submitHandler(event) {
    event.preventDefault();

    const inputCart = inputRef.current.value;
    const inputCartNumber = +inputCart;

    if (
      inputCart.trim().length === 0 ||
      inputCartNumber > 5 ||
      inputCartNumber < 1
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onaddToCart(inputCartNumber);
  }

  return (
    <form className="row   mealItemForm " onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={inputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",

          defaultValue: "1",

          className: "mealItemForm_label",
        }}
      />
      <Button type="submit">+ Add</Button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}
export default MealItemForm;
