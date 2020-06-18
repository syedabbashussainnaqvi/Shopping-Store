import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          className={classes.InputElement}
          onChange={props.changeHandler}
        />
      );
      break;
    case "textArea":
      inputElement = <textarea {...props} />;
      break;
    case "select":
      inputElement = (
        <select className={classes.InputElement} onChange={props.changeHandler}>
          {props.elementConfig.options.map((value, index) => {
            return (
              <option key={index} value={value.value}>
                {value.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      break;
  }
  return <div className={classes.Input}>{inputElement}</div>;
};

export default Input;
