import React from "react";
import "./Confirmation.css";
import Button from "../UI/Button/Button";
import useInput from "../../hooks/use-input";
const Confirmation = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const validEmail = (value) => value.includes("@");
  const validNumber = (value) => value.length > 6;
  const {
    value: nameValueEntered,
    isValid: nameIsValid,
    hasError: isNameInputInvalid,
    blurHandler: nameBlurHandler,
    inputChangeHandler: inputNameChangeHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);
  const {
    value: emailValueEntered,
    isValid: emailIsValid,
    hasError: isEmailInputInvalid,
    blurHandler: emailBlurHandler,
    inputChangeHandler: inputEmailChangeHandler,
    reset: resetEmailInput,
  } = useInput(validEmail);
  const {
    value: addressValueEntered,
    isValid: addressIsValid,
    hasError: isAddressInputInvalid,
    blurHandler: addressBlurHandler,
    inputChangeHandler: inputAddressChangeHandler,
    reset: resetAddressInput,
  } = useInput(isNotEmpty);
  const {
    value: numberValueEntered,
    isValid: numberIsValid,
    hasError: isNumberInputInvalid,
    blurHandler: numberBlurHandler,
    inputChangeHandler: inputNumberChangeHandler,
    reset: resetNumberInput,
  } = useInput(validNumber);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && addressIsValid && numberIsValid) {
    formIsValid = true;
  }
  const goBackHandler = () => {
    props.back();
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid || !addressIsValid || !numberIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
    resetAddressInput();
    resetNumberInput();
    props.confirmed({
      name: nameValueEntered,
      email: emailValueEntered,
      address: addressValueEntered,
      number: numberValueEntered,
    });
  };
const formControl = "form-control"
const invalidFormControl =` ${formControl} form-control_invalid`
  let inputNameClassName
  if (isNameInputInvalid) {
    inputNameClassName = invalidFormControl
  } else {
    inputNameClassName = formControl
  }

  let inputEmailClassName;
  if (isEmailInputInvalid) {
    inputEmailClassName = invalidFormControl
  } else {
    inputEmailClassName = formControl
  }
  let inputAddressClassName;
  if (isAddressInputInvalid) {
    inputAddressClassName =invalidFormControl
  } else {
    inputAddressClassName = formControl
  }
  let inputNumberClassName;
  if (isNumberInputInvalid) {
    inputNumberClassName = invalidFormControl
  } else {
    inputNumberClassName = formControl
  }
  return (
    <div className="row cart-section">
      <form onSubmit={formSubmitHandler} className="row py-3">
        <div className="col-5">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={nameValueEntered}
            onBlur={nameBlurHandler}
            onChange={inputNameChangeHandler}
            type="text"
            className={inputNameClassName}
            id="name"
          />
          {isNameInputInvalid && (
            <p className="mt-3 text-danger">The name section is empty.</p>
          )}
        </div>
        <div className="col-5 offset-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            value={emailValueEntered}
            onBlur={emailBlurHandler}
            onChange={inputEmailChangeHandler}
            type="email"
            className={inputEmailClassName}
            id="email"
          />
          {isEmailInputInvalid && (
            <p className="mt-3 text-danger">The email is not valid.</p>
          )}
        </div>
        <div className="col-5">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            onChange={inputAddressChangeHandler}
            value={addressValueEntered}
            onBlur={addressBlurHandler}
            className={inputAddressClassName}
            id="address"
            rows="3"
          />{" "}
          {isAddressInputInvalid && (
            <p className="mt-3 text-danger">The address section is empty.</p>
          )}
        </div>

        <div className="col-5 offset-2">
          <label htmlFor="number" className="form-label">
            Number
          </label>
          <input
            onChange={inputNumberChangeHandler}
            value={numberValueEntered}
            onBlur={numberBlurHandler}
            type="number"
            className={inputNumberClassName}
            id="number"
          />
          {isNumberInputInvalid && (
            <p className="mt-3 text-danger">The number is not valid.</p>
          )}
        </div>
        <div className=" col-5 pt-3 ">
          <p>
            {" "}
            Total Ammount $<b>{props.totalPrice}</b>.
          </p>
        </div>
        <div className="col-5 offset-2 confirmation_button">
          <Button
            type="button"
            onClick={goBackHandler}
            className="confirmation_buttonIndividual"
          >
            Go Back
          </Button>
          <Button
            type="submit"
            disabled={!formIsValid}
            className="confirmation_buttonIndividual"
          >
            Confirm
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Confirmation;
