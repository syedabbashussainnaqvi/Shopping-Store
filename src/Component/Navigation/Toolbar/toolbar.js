import React from "react";
import classes from "./toolbar.module.css";
import Logo from "../../Logo/Logo";
import CartLogo from "../../Logo/cartLogo";
import Button from "../../UI/Button/Button";
import NavigationItem from "../NavigationItems/NavigationItems";
const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Logo />
      {/* <select>
        <option>Shop</option>
        <option>Shop</option>
        <option>Shops</option>
      </select>
      <select>
        <option>Fabric</option>
      </select>
      <select>
        <option>General</option>
      </select>
      <select>
        <option>About</option>
      </select> */}
      <NavigationItem />
      <div className={classes.Auth}>
        <Button type="danger">Log In</Button>
      </div>
      <CartLogo />
    </header>
  );
};

export default Toolbar;
