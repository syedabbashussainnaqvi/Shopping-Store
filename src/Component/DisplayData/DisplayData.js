import React, { Component } from "react";
import ShowData from "./DisplayDatas/DisplayDatas";
import Toolbar2 from "../Navigation/Toolbar2/Toolbar2";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
class DisplayData extends Component {
  render() {
    let DataShow = this.props.data.map((dataItem, index) => {
      return (
        <ShowData
          selectedItemHandler={this.props.selectedItemHandler}
          key={index}
          data={dataItem}
        />
      );
    });
    return (
      <React.Fragment>
        <Toolbar2 />
        <Container maxWidth="lg">
          <Box flexDirection="column" width="auto" margin="20px" border="solid">
            {DataShow}
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}
export default DisplayData;
