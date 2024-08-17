import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import drinks from "./drinks";
import locations from "./locations";
import navheight from "./navheight";
import cart from "./cart";
import showCart from "./showCart";

const reducer = combineReducers({
  drinks,
  locations,
  navheight,
  cart,
  showCart,
});

let middleware = "";

if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
} else {
  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
}

const store = createStore(reducer, middleware);

export default store;
