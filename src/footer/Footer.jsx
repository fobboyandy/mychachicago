import React, { useState, useEffect } from "react";
import "./footer.scss";
import Facebook from "../longstuff/Facebook";
import Instagram from "../longstuff/Instagram";
import Yelp from "../longstuff/Yelp";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [current, setCurrent] = useState("");
  const history = useNavigate();

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

  useEffect(() => {
    setCurrent(window.location.href);
  }, [window.location.href]);

  return (
    <div className="footer-parent">
      <div className="icons-container">
        <a
          className="footer-icons"
          href="https://www.facebook.com/mychamachine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          className="footer-icons"
          href="https://www.instagram.com/mychachicago/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a
          className="footer-icons"
          href="https://www.yelp.com/biz/mycha-chicago-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Yelp />
        </a>
      </div>

      <div className="ul-footer">
        <div
          className="li-footer"
          onClick={() => {
            current[current.length - 1] === "/"
              ? window.scrollTo({ top: 0, behavior: "smooth" })
              : history("/");
          }}
        >
          Home
        </div>
        <div
          className="li-footer"
          onClick={() => {
            current.slice(current.length - 4, current.length) === "menu"
              ? scrollCatering()
              : history("/menu", { state: { from: "catering" } });
          }}
        >
          Catering
        </div>
        <div
          className="li-footer"
          onClick={() => {
            current.slice(current.length - 4, current.length) === "menu"
              ? window.scrollTo({ top: 0, behavior: "smooth" })
              : history("/menu");
          }}
        >
          Menu
        </div>
        <div className="li-footer" onClick={() => history("/locations")}>
          Locations
        </div>
        <div
          className="li-footer"
          onClick={() => {
            current[current.length - 1] === "/"
              ? scrollContact()
              : history("/", { state: { from: "contact" } });
          }}
        >
          Contact
        </div>
      </div>

      <div style={{ marginTop: "10px" }}>
        <span style={{ fontSize: "22px" }}>© </span>2022 Mycha LLC
      </div>
    </div>
  );
};

export default Footer;
