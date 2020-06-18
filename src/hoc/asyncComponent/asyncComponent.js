import React, { Component } from "react";
//This component is used for lazy loading/ code spliting
const asyncComponent = (ImportComponent) => {
  return class extends Component {
    state = {
      component: null,
    };
    componentDidMount() {
      ImportComponent().then((cmp) => {
        this.setState({
          component: cmp.default,
        });
      });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
