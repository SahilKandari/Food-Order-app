import "./Button.css";

function Button(props) {
  const classes = "button btn " + props.className;
  const id = props.id;
  return (
    <button
      className={classes}
      id={id}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
export default Button;
