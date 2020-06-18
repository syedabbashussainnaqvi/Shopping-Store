import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import imga from "../../Assets/Digital Picture.jpg";
import classes from "./AboutUs.module.css";
// import DisplayData from "../DisplayData/DisplayData";
export default function aboutUs(props) {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Box
          flexDirection="block"
          className={classes.about}
          width="auto"
          margin="20px"
          alignItems="center"
        >
          <img src={imga} alt="as" />
          <p>
            Developed by <br />
            Syed Abbas Hussain Naqvi <br /> Computer Scientist
          </p>
        </Box>
      </Container>
    </React.Fragment>
  );
}
