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
import BlankContact from "./blankredirects/BlankContact";
import BlankMenu from "./blankredirects/BlankMenu";

import Checker from "./checker/Checker";
import axios from "axios";
import BlankLocations from "./blankredirects/BlankLocations";
import Nav2 from "./catering/nav/Nav2";
import Events from "./catering/events/Events";

export default function App() {
  function openNav() {
    gsap.to(".overlay-nav", { y: 0, duration: 0.8, opacity: 1 });
  }

  function closeNav() {
    gsap.to(".overlay-nav", { y: "-100%", duration: 0.8, opacity: 0 });
  }

  useEffect(() => {
    if (!window.location.hostname.includes("localhost")) {
      if (window.location.protocol !== "https:") {
        window.location.replace(
          `https:${window.location.href.substring(
            window.location.protocol.length
          )}`
        );
      }
    }
  }, []);

  useEffect(() => {
    async function f() {
      await axios.get("/traffic").then(async (res) => {
        const { data } = res;

        await axios.put("/t", { id: data[0].id });
      });
    }

    f();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div style={{ minHeight: "100vh" }}>
          {window.location.host.split(".")[0] === "catering" ? (
            <Nav2 />
          ) : (
            <Nav openNav={openNav} />
          )}

          {window.location.host.split(".")[0] !== "catering" && (
            <Overlay closeNav={closeNav} />
          )}

          {window.location.host.split(".")[0] === "catering" ? (
            <Routes>
              <Route exact path='/' element={<CateringShop />} />
              <Route path='*' element={<NotFound />} />
              <Route exact path='/events' element={<Events />} />
            </Routes>
          ) : (
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

              <Route exact path='/contactcontact' element={<BlankContact />} />
              <Route exact path='/contactrefund' element={<BlankContact />} />
              <Route exact path='/contactmenu' element={<BlankMenu />} />
              <Route
                exact
                path='/contactlocation'
                element={<BlankLocations />}
              />

              <Route path='*' element={<NotFound />} />
            </Routes>
          )}
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
