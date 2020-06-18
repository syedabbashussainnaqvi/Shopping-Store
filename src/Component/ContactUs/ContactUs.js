import React from "react";
import classes from "./ContactUs.module.css";
import { useState } from "react";
const ContactUS = (props) => {
  const [state, setState] = useState({
    contact: {
      name: {
        value: null,
      },
      email: {
        value: null,
      },
      message: {
        value: null,
      },
    },
  });
  const formChangeHandler = (event, identifier) => {
    event.preventDefault();
    const updateState = { ...state };
    const contactUpdate = { ...updateState.contact };
    const propertyInOrder = { ...contactUpdate[identifier] };

    propertyInOrder.value = event.target.value;
    contactUpdate[identifier] = propertyInOrder;
    updateState.contact = contactUpdate;
    updateState["contact"] = contactUpdate;
    setState({
      contact: updateState,
    });
  };
  return (
    <form className={classes.form}>
      <h2>CONTACT US</h2>
      <p type="Name:">
        <input
          placeholder="Write your name here.."
          onChange={(event) => formChangeHandler(event, "name")}
        ></input>
      </p>
      <p type="Email:">
        <input
          placeholder="Let us know how to contact you back.."
          onChange={(event) => formChangeHandler(event, "email")}
        ></input>
      </p>
      <p type="Message:">
        <input
          placeholder="What would you like to tell us.."
          onChange={(event) => formChangeHandler(event, "message")}
        ></input>
      </p>
      <button>Send Message</button>
    </form>
  );
};
export default ContactUS;
