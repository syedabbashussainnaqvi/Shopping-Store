import React, { Component } from "react";
import Input from "../../Component/UI/Input/Input";
import Button from "../../Component/UI/Button/Button";
import classes from "./Auth.module.css";
class Auth extends Component {
  state = {
    auth: {
      email: {
        inputtype: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter Your Email",
        },
        value: "",
      },
      password: {
        inputtype: "input",
        elementConfig: {
          type: "password",
          placeholder: "Enter Your Password",
        },
        value: "",
      },
    },
    signIn: true,
  };
  inputHandler = (event, identifier) => {
    const updateState = { ...this.state.auth };
    const identifierSelected = { ...updateState[identifier] };
    identifierSelected.value = event.target.value;
    updateState[identifier] = identifierSelected;
    this.setState({
      auth: updateState,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();

    console.log("submitted form");
  };
  render() {
    const inputFields = Object.keys(this.state.auth).map((entry, index) => {
      return (
        <Input
          key={index}
          inputtype={this.state.auth[entry].inputtype}
          elementConfig={this.state.auth[entry].elementConfig}
          changeHandler={(event) => {
            this.inputHandler(event, entry);
          }}
        />
      );
    });
    return (
      <div className={classes.Auth}>
        <form onSubmit={this.submitHandler}>
          {inputFields}
          <Button type="success">SUBMIT</Button>
          <Button type="danger" dangerHandler={this.switchHandler}>
            Switch to {this.state.signIn ? "SignUp" : "SignIn"}
          </Button>
        </form>
      </div>
    );
  }
}
export default Auth;
