import React from "react";
import classes from "./Logo.module.css";
import image from "../../Assets/logo.png";
const Logo = (props) => {
  return (
    <div className={classes.Logo1}>
      <img src={image} alt="Shopping Logo" className={classes.Logo} />
    </div>
  );
};
export default Logo;
