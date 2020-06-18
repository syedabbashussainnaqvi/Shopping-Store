import React, { Component } from "react";
import Layout from "./Component/Layout/layout";
// import Auth from "./Container/Auth/Auth";
import AboutUs from "./Component/AboutUs/AbousUs";
import { Switch, Route, Redirect } from "react-router";
import DataContainer from "./Container/DataContainer/DataContainer";
import Category from "./Component/Category/Category";
import SingleItemDisplay from "./Component/DisplayData/SingleItemDisplay/SingleItemDisplay";
import ContactUS from "./Component/ContactUs/ContactUs";
class App extends Component {
  render() {
    let changeRouteOnAuth = (
      <Switch>
        <Route path="/home" exact component={Category} />
        <Route path="/home/:id" exact component={DataContainer} />
        <Route path="/home/:id/:id" exact component={SingleItemDisplay} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/contactUs" component={ContactUS} />
        <Redirect to="/home" />
      </Switch>
    );

    return <Layout>{changeRouteOnAuth}</Layout>;
  }
}

export default App;
