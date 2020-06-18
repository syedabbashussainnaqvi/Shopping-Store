import React, { useState, Component } from "react";
import classes from "./Toolbar2.module.css";
import Input from "../../UI/Input/Input";

class SortBy extends Component {
  state = {
    orderBy: {
      inputtype: "select",
      elementConfig: {
        options: [
          { value: "Price", displayValue: "Price" },
          { value: "Size", displayValue: "Size" },
        ],
      },
      value: "Price",
    },
  };
  inputHandler = (event) => {
    const updatestate = { ...this.state };
    const order = { ...updatestate.orderBy };
    order.value = event.target.value;
    updatestate.orderBy = order;
    this.setState({
      orderBy: updatestate,
    });
  };
  render() {
    return (
      <div className={classes.sortBy}>
        <div>Men</div>
        <div className={classes.sort}>
          <div>Sort by</div>
          <Input
            inputtype={this.state.orderBy.inputtype}
            elementConfig={this.state.orderBy.elementConfig}
            changeHandler={(event) => {
              this.inputHandler(event);
            }}
          />
        </div>
      </div>
    );
  }
}
export default SortBy;
