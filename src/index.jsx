import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/quantity' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
