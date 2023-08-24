const SET_DRINKS = "SET_DRINKS";

export const dispatchSetDrinks = (value) => ({
  type: SET_DRINKS,
  value,
});

export default function (state = [], action) {
  switch (action.type) {
    case SET_DRINKS:
      return action.value;
    default:
      return state;
  }
}
