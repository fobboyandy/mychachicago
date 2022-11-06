import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Overlay = ({ closeNav }) => {
  const history = useNavigate();
  const [current, setCurrent] = useState("");

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

  function goHome() {
    closeNav();

    setTimeout(() => {
      current[current.length - 1] === "/"
        ? window.scrollTo({ top: 0, behavior: "smooth" })
        : history("/");
    }, 800);
  }

  function goMenu() {
    closeNav();

    setTimeout(() => {
      current.slice(current.length - 4, current.length) === "menu"
        ? window.scrollTo({ top: 0, behavior: "smooth" })
        : history("/menu");
    }, 800);
  }

  function goLocations() {
    closeNav();

    setTimeout(() => {
      history("/locations");
    }, 800);
  }

  function goCatering() {
    closeNav();
    setTimeout(() => {
      current.slice(current.length - 4, current.length) === "menu"
        ? scrollCatering()
        : history("/menu", { state: { from: "catering" } });
    }, 800);
  }

  function goContact() {
    closeNav();
    setTimeout(() => {
      current[current.length - 1] === "/"
        ? scrollContact()
        : history("/", { state: { from: "contact" } });
    }, 800);
  }

  useEffect(() => {
    setCurrent(window.location.href);
  }, [window.location.href]);

  return (
    <div className="overlay-nav">
      <div className="x-container" onClick={() => closeNav()}>
        <div id="x" />
      </div>
      <div className="overlay-child" onClick={() => goHome()}>
        Home
      </div>

      <div className="overlay-child" onClick={() => goCatering()}>
        Catering
      </div>

      <div className="overlay-child" onClick={() => goMenu()}>
        Menu
      </div>

      <div className="overlay-child" onClick={() => goLocations()}>
        Locations
      </div>

      <div className="overlay-child" onClick={() => goContact()}>
        Contact
      </div>
    </div>
  );
};

export default Overlay;
