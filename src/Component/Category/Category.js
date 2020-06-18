import React, { Component } from "react";
import classes from "./Category.module.css";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slider from "../UI/SliderImage/Slider";

import Category_1 from "../../Assets/category_1.jpg";
import Category_2 from "../../Assets/category_2.jpg";
import Category_3 from "../../Assets/category_3.jpg";

class Category extends Component {
  categoryHandler = (type) => {
    this.props.history.push({ pathname: this.props.match.url + "/" + type });
  };
  render() {
    const types = {
      president_Edition: Category_1,
      kurtas: Category_2,
      suits: Category_3,
    };
    let loopCategory = Object.keys(types).map((type, index) => {
      return (
        <img
          src={types[type]}
          alt="ImageCaption"
          key={index}
          onClick={() => this.categoryHandler(type)}
        />
      );
    });

    return (
      <React.Fragment>
        <Slider />
        <Container maxWidth="lg">
          <Box
            display="block"
            width="auto"
            marginTop="10px"
            className={classes.Category}
          >
            {loopCategory}
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}

export default Category;
