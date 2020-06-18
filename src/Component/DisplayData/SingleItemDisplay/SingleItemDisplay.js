import React, { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import classes from "./SingleItemDisplay.module.css";
const SingleDataDisplay = (props) => {
  const item = useSelector((state) => state.selectedItem);
  const [state, setState] = useState({
    Quantity: null,
    img: item["image"][0],
  });
  const changeHandler = (event) => {
    console.log(event.target.value);
    setState({
      ...state,
      Quantity: event.target.value,
    });
  };
  const imageChangeHandler = (img) => {
    setState({
      ...state,
      img: img,
    });
  };
  const cartHandler = () => {
    console.log("Ab ayah sa mana redux store ma add karna ha order apna");
  };
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Box
          width="auto"
          display="flex"
          flexDirection=" "
          margin="20px"
          className={classes.SelectedItems}
        >
          <Box>
            <Box
              component="img"
              marginTop="20px"
              width="auto"
              border="solid"
              src={state.img}
            />

            {item["image"].map((item, index) => {
              return (
                <Box
                  component="img"
                  width="100px"
                  marginLeft="5px"
                  height="100px"
                  border="solid"
                  onClick={() => imageChangeHandler(item)}
                  src={item}
                />
              );
            })}
          </Box>
          <Box textAlign="center" alignItems="center" marginTop="20px">
            <Box component="h1">{item["label"]}</Box>
            <Box component="p">Price: {item["price"]}</Box>
            <Box>
              Quantity:{" "}
              <Box
                component="input"
                placeholder="Enter Quantity"
                textAlign="center"
                borderRadius="4px"
                onChange={(event) => changeHandler(event)}
              />
            </Box>
            <Box
              component="button"
              marginTop="20px"
              onClick={() => cartHandler()}
            >
              ADD TO CART
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default SingleDataDisplay;
