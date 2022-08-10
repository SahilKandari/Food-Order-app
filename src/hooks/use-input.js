import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const ValueIsValid = validateValue(enteredInput);
  const hasError = isTouched && !ValueIsValid;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredInput("");
    setIsTouched(false);
  };

  return {
    value: enteredInput,
    isValid: ValueIsValid,
    hasError,
    inputChangeHandler,
    blurHandler,
    reset,
  };
};
export default useInput;
