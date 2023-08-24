const SET_LOCATIONS = "SET_LOCATIONS";

export const dispatchSetLocations = (value) => ({
  type: SET_LOCATIONS,
  value,
});

export default function (state = [], action) {
  switch (action.type) {
    case SET_LOCATIONS:
      return action.value;
    default:
      return state;
  }
}
