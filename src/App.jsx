import React, { useEffect } from "react";

import "./index.scss";

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
import Contact from "./home/Contact";
import Admin from "./admin/Admin";
import AdminTwo from "./admin/AdminTwo";
import CateringShop from "./catering/CateringShop";

import Checker from "./checker/Checker";

export default function App() {
  function openNav() {
    gsap.to(".overlay-nav", { y: 0, duration: 0.8, opacity: 1 });
  }

  function closeNav() {
    gsap.to(".overlay-nav", { y: "-100%", duration: 0.8, opacity: 0 });
  }

  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

  return (
    <div>
      <BrowserRouter>
        <div style={{ minHeight: "100vh" }}>
          <Nav openNav={openNav} />
          <Overlay closeNav={closeNav} />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/locations/check' element={<Checker />} />
            <Route
              exact
              path='/locations/check/:location'
              element={<Checker />}
            />

            <Route exact path='/locations' element={<MainLocations />} />
            <Route
              exact
              path='/locations/:section'
              element={<MainLocations />}
            />

            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/menu' element={<Menu />} />
            <Route exact path='/menu/:id' element={<MenuItem />} />
            <Route exact path='/catering' element={<CateringShop />} />

            <Route exact path='/admin' element={<Admin />} />
            <Route exact path='/admin/stock' element={<AdminTwo />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
