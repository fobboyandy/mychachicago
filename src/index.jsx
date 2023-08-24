import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store/storeIndex";

import { Provider } from "react-redux";

console.log(
  "Thanks for checking out Mycha Website! Made with love by Yingson Yu <3."
);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </>
);
