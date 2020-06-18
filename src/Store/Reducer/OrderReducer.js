import * as actionType from "../Action/actionType";
const initialState = {
  orderList: {
    ID: {
      Data: "abbas",
    },
  },
};

const add = (state, action) => {};

const remove = (state, action) => {};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.addToCart:
      return add(state, action);
    case actionType.removeFromCart:
      return remove(state, action);
    default:
      break;
  }
  return state;
};

export default OrderReducer;
