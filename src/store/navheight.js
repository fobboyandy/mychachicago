const set_navheight = "set_navheight";

export const dispatchSetNavHeight = (value) => ({
  type: set_navheight,
  value,
});

export default function (state = 0, action) {
  switch (action.type) {
    case set_navheight:
      return action.value;
    default:
      return state;
  }
}
