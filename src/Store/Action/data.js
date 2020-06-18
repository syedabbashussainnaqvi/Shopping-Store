import * as actionType from "./actionType";
import Axios from "axios";

export const selectedItem = (itemData) => {
  return {
    type: actionType.selectedItem,
    selectedItem: itemData,
  };
};

export const dataFetchStart = () => {
  return {
    type: actionType.dataFetchStart,
  };
};

export const dataFetchSuccess = (data) => {
  return {
    type: actionType.dataFetchSuccess,
    data: data,
  };
};

export const dataFetchFail = (error) => {
  return {
    type: actionType.dataFetchFail,
    error: error,
  };
};

//main function that we are calling from the application
export const dataFetchAsync = (id, type) => {
  return (dispatch) => {
    dispatch(dataFetchStart());
    let url =
      "https://attentive-fire.firebaseio.com/" + type + "/" + id + ".json";
    Axios.get(url)
      .then((response) => {
        dispatch(dataFetchSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(dataFetchFail(error));
      });
  };
};
