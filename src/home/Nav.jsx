import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Homelogo from "../longstuff/Homelogo";
import "./home.scss";

import gsap from "gsap";
import $ from "jquery";

const Nav = ({ openNav }) => {
  const history = useNavigate();

  const [width, setWidth] = useState(window.innerWidth);
  const [current, setCurrent] = useState("");

  const resized = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resized);

    return () => {
      window.removeEventListener("resize", resized);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    gsap.fromTo(
      ".nav-home",
      { opacity: 0, y: "-30%" },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  useEffect(() => {
    setCurrent(window.location.href);
  }, [window.location.href]);

  function scrollCatering() {
    const catering = document
      .getElementById("catering-p")
      .getBoundingClientRect();

    window.scrollTo({
      top: catering.top + window.pageYOffset - 100,
      behavior: "smooth",
    });
  }

  function scrollContact() {
    const contact = document
      .getElementById("contactparent")
      .getBoundingClientRect();

    window.scrollTo({
      top: contact.top + window.pageYOffset - 140,
      behavior: "smooth",
    });
  }

  return (
    <div className="nav-home" style={{ zIndex: 10, userSelect: "none" }}>
      <Homelogo />
      <div style={{ flexGrow: 1 }} />
      {width > 750 ? (
        <div className="li-container" style={{ marginRight: "5%" }}>
          <div
            className="li-nav"
            onClick={() => {
              current[current.length - 1] === "/"
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : history("/");
            }}
          >
            Home
          </div>
          <div
            className="li-nav"
            onClick={() => {
              current.slice(current.length - 4, current.length) === "menu"
                ? scrollCatering()
                : history("/menu", { state: { from: "catering" } });
            }}
          >
            Catering
          </div>
          <div className="li-nav" onClick={() => history("/locations")}>
            Locations
          </div>
          <div
            className="li-nav"
            onClick={() => {
              current.slice(current.length - 4, current.length) === "menu"
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : history("/menu");
            }}
          >
            Menu
          </div>
          <div
            className="li-nav"
            onClick={() => {
              current[current.length - 1] === "/"
                ? scrollContact()
                : history("/", { state: { from: "contact" } });
            }}
          >
            Contact
          </div>
        </div>
      ) : (
        <div className="li-container2" onClick={() => openNav()}>
          <div className="hamburger-nav" />
        </div>
      )}
    </div>
  );
};

export default Nav;
