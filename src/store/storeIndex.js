import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import drinks from "./drinks";
import locations from "./locations";

const reducer = combineReducers({
  drinks,
  locations,
});

let middleware = "";

if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
} else {
  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
}

const store = createStore(reducer, middleware);

export default store;
