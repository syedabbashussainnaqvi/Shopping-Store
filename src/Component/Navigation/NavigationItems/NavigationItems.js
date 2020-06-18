import React from "react";
import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";
const NavigationItem = (props) => {
  return (
    <ul className={classes.header}>
      <li>
        <NavLink to="/home" exact activeStyle={{ color: "red" }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/upload" exact activeStyle={{ color: "red" }}>
          Upload
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" exact activeStyle={{ color: "red" }}>
          About US
        </NavLink>
      </li>
      <li>
        <NavLink to="/contactUs" exact activeStyle={{ color: "red" }}>
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationItem;
