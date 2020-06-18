import * as actionType from "./actionType";
export const addToCart = (item) => {
  return {
    type: actionType.addToCart,
    item: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionType.addToCart,
    id: id,
  };
};
