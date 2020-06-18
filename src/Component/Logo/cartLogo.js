import React from "react";
import classes from "./cartLogo.module.css";
const CartLogo = (props) => {
  return (
    <div className={classes.Logo1}>
      <img
        src="https://img.icons8.com/wired/48/000000/shopping-bag.png"
        alt="Shopping Logo"
        className={classes.Logo}
      />
    </div>
  );
};
export default CartLogo;
