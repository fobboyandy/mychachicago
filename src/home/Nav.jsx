import React from "react";
import Homelogo from "../longstuff/Homelogo";
import "./home.scss";

const Nav = () => {
  return (
    <div className='nav-home'>
      <Homelogo />
      <div style={{ flexGrow: 1 }} />
      <div className='li-container' style={{ marginRight: "5%" }}>
        <div className='li-nav'>Home</div>
        <div className='li-nav'>Locations</div>
        <div className='li-nav'>Menu</div>
        <div className='li-nav'>Contact Us</div>
      </div>
    </div>
  );
};

export default Nav;
