import React from "react";
import { useNavigate } from "react-router-dom";

const Overlay = ({ closeNav }) => {
  const history = useNavigate();

  function goHome() {
    closeNav();

    setTimeout(() => {
      history("/");
    }, 800);
  }

  function goMenu() {
    closeNav();

    setTimeout(() => {
      history("/menu");
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
      history("/menu", { state: { from: "catering" } });
    }, 800);
  }

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

      <div className="overlay-child">Contact</div>
    </div>
  );
};

export default Overlay;
