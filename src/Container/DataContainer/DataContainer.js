import React, { Component } from "react";
import { connect } from "react-redux";
import * as dataActionCreator from "../../Store/Action/index";
import DisplayData from "../../Component/DisplayData/DisplayData";
import BreadCrumbs from "../../Component/BreadCrumbs/Breadcrumbs";
class DataContainer extends Component {
  componentDidMount() {
    //Here we can set men dynamically in future when we increase the scope of project
    this.props.fetchDataAsync(this.props.match.params.id, "men");
  }

  selectedItemHandler = (id) => {
    this.props.history.push({
      pathname: "/home/" + this.props.match.params.id + "/" + id,
    });
  };
  render() {
    let testData = <h1>Loading Data</h1>;
    if (this.props.data) {
      testData = (
        <DisplayData
          data={this.props.data}
          selectedItemHandler={this.selectedItemHandler}
        />
      );
    }
    return (
      <React.Fragment>
        {/* <BreadCrumbs /> */}
        {testData}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataAsync: (id, type) =>
      dispatch(dataActionCreator.dataFetchAsync(id, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);
