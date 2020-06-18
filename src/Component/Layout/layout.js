import React from "react";
import Toolbar from "../Navigation/Toolbar/toolbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <Toolbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
