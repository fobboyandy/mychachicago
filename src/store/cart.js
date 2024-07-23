const SET_CART = "SET_CART";

export const dispatchSetCart = (value) => ({
  type: SET_CART,
  value,
});

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CART:
      return action.value;
    default:
      return state;
  }
}
