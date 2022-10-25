import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Homelogo from "../longstuff/Homelogo";
import "./home.scss";

const Nav = ({ openNav }) => {
  const history = useNavigate();

  const [width, setWidth] = useState(window.innerWidth);

  const resized = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resized);

    return () => {
      window.removeEventListener("resize", resized);
    };
  }, [window.innerWidth]);
  return (
    <div className="nav-home" style={{ zIndex: 10, userSelect: "none" }}>
      <Homelogo />
      <div style={{ flexGrow: 1 }} />
      {width > 750 ? (
        <div className="li-container" style={{ marginRight: "5%" }}>
          <div className="li-nav" onClick={() => history("/")}>
            Home
          </div>
          <div className="li-nav">Catering</div>
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
      ) : (
        <div className="li-container2" onClick={() => openNav()}>
          <div className="hamburger-nav" />
        </div>
      )}
    </div>
  );
};

export default Nav;
