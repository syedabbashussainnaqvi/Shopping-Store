import * as actionType from "../Action/actionType";
const initialState = {
  data: null,
  error: null,
  selectedItem: {
    id: 1,
    image: [
      "https://d224nth7ac0evy.cloudfront.net/catalog/product/cache/49efe5fa87ac431d5279ce5b7fa2fbf2/w/h/white_fashion_suit_ske-179_3_.jpg",
      "https://d224nth7ac0evy.cloudfront.net/catalog/product/cache/9a894c8599c9525ecf8d6b4d9042d360/w/h/white_fashion_suit_ske-179_4_.jpg",
    ],
    label: "White Fashion Suit SKE-179",
    price: "PKR 3,115",
  },
};

const dataFetchSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    error: null,
  };
};
const dataFetchFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const selectedItem = (state, action) => {
  return {
    ...state,
    selectedItem: action.selectedItem,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.dataFetchStart:
      return {};
    case actionType.dataFetchSuccess:
      return dataFetchSuccess(state, action);
    case actionType.dataFetchFail:
      return dataFetchFail(state, action);
    case actionType.selectedItem:
      return selectedItem(state, action);
    default:
      break;
  }
  return state;
};

export default reducer;
