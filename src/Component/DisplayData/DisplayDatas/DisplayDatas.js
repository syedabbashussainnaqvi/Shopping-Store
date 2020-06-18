import React from "react";
import classes from "./Displaydata.module.css";
import * as dataActionCreator from "../../../Store/Action/index";
import { useDispatch } from "react-redux";
const DisplayDatas = (props) => {
  const dispatch = useDispatch();

  const clickHandler = (itemData) => {
    dispatch(dataActionCreator.selectedItem(itemData));
    props.selectedItemHandler(itemData.label);
  };
  const ret = (
    <div
      className={classes.DisplayDatas}
      onClick={() => clickHandler(props.data)}
    >
      <img src={props.data.image[0]} alt="ImageCaption" />
      <p>{props.data.label}</p>
      <p> {props.data.price}</p>
    </div>
  );
  return ret;
};
export default DisplayDatas;
