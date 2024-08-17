const SET_SHOWCART = "SET_SHOWCART";

export const dispatchSetShowCart = (value) => ({
  type: SET_SHOWCART,
  value,
});

export default function (state = false, action) {
  switch (action.type) {
    case SET_SHOWCART:
      return action.value;
    default:
      return state;
  }
}
