import "./Input.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  const labelClasses = "form-label " + props.input.className;
  const inputID = "form-control " + props.input.id;

  return (
    <div>
      <label className={labelClasses} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        ref={ref}
        className={inputID}
        {...props.input}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
});
export default Input;
