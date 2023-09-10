import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Overlay = ({ closeNav }) => {
  const history = useNavigate();
  const loc = useLocation();
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

  function goHome() {
    closeNav();

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 800);
  }

  function goMenu() {
    closeNav();

    setTimeout(() => {
      loc.pathname === "/menu"
        ? window.scrollTo({ top: 0, behavior: "smooth" })
        : history("/menu");
    }, 800);
  }

  function goLocations() {
    closeNav();

    setTimeout(() => {
      loc.pathname === "/locations"
        ? window.scrollTo({ top: 0, behavior: "smooth" })
        : history("/locations");
    }, 800);
  }

  function goCatering() {
    closeNav();
    setTimeout(() => {
      loc.pathname === "/menu"
        ? scrollCatering()
        : history("/menu", { state: { from: "catering" } });
    }, 800);
  }

  function goContact() {
    closeNav();
    setTimeout(() => {
      loc.pathname === "/contact"
        ? window.scrollTo({ top: 0, behavior: "smooth" })
        : history("/contact");
    }, 800);
  }

  function goChecker() {
    closeNav();
    setTimeout(() => {
      loc.pathname === "/locations/check"
        ? window.scrollTo({ top: 0, behavior: "smooth" })
        : history("/locations/check");
    }, 800);
  }

  useEffect(() => {
    setCurrent(window.location.href);
  }, [window.location.href]);

  return (
    <div className='overlay-nav'>
      <div className='x-container' onClick={() => closeNav()}>
        <div id='x' />
      </div>
      {loc.pathname === "/" ? (
        <div onClick={() => goHome()} className='overlay-child'>
          Home
        </div>
      ) : (
        <a
          className='overlay-child'
          href='/'
          style={{ textDecoration: "none", color: "rgb(51,51,51)" }}
        >
          Home
        </a>
      )}

      {/* <div className="overlay-child" onClick={() => goCatering()}>
        Catering
      </div> */}

      <div className='overlay-child' onClick={() => goMenu()}>
        Menu
      </div>

      <div className='overlay-child' onClick={() => goLocations()}>
        Locations
      </div>

      <div className='overlay-child' onClick={() => goChecker()}>
        Stock Checker
      </div>

      <div className='overlay-child' onClick={() => goContact()}>
        Contact
      </div>
    </div>
  );
};

export default Overlay;
