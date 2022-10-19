import React from "react";
import { useNavigate } from "react-router-dom";
import Homelogo from "../longstuff/Homelogo";
import "./home.scss";

const Nav = () => {
  const history = useNavigate();
  return (
    <div className="nav-home" style={{ zIndex: 10, userSelect: "none" }}>
      <Homelogo />
      <div style={{ flexGrow: 1 }} />
      <div className="li-container" style={{ marginRight: "5%" }}>
        <div className="li-nav" onClick={() => history("/")}>
          Home
        </div>
        <div className="li-nav" onClick={() => history("/locations")}>
          Locations
        </div>
        <div className="li-nav" onClick={() => history("/menu")}>
          Menu
        </div>
        <div className="li-nav" onClick={() => history("/contact")}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Nav;
