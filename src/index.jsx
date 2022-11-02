import React from "react";
import ReactDOM from "react-dom/client";
import App from "./checker/App";
import Home from "./home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLocations from "./location/MainLocations";
import Nav from "./home/Nav";
import Menu from "./menu/Menu";
import MenuItem from "./menu/menuitem/MenuItem";
import Overlay from "./home/Overlay";

import gsap from "gsap";
import Footer from "./footer/Footer";
import NotFound from "./NotFound";

const root = ReactDOM.createRoot(document.getElementById("app"));

function openNav() {
  gsap.to(".overlay-nav", { y: 0, duration: 0.8, opacity: 1 });
}

function closeNav() {
  gsap.to(".overlay-nav", { y: "-100%", duration: 0.8, opacity: 0 });
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Nav openNav={openNav} />
        <Overlay closeNav={closeNav} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/locations" element={<MainLocations />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/menu/:id" element={<MenuItem />} />
          <Route exact path="/locations/check" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </>
);
