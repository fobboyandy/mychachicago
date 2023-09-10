import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./footer.scss";

import Facebook from "../longstuff/Facebook";
import Instagram from "../longstuff/Instagram";
import Yelp from "../longstuff/Yelp";
import PhoneIcon from "../longstuff/PhoneIcon";
import Mail from "../longstuff/Mail";

const Footer = () => {
  const [current, setCurrent] = useState("");
  const history = useNavigate();
  const loc = useLocation();

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
    <div
      className='footer-parent'
      id='footermain'
      style={{ display: loc.pathname === "/admin" && "none" }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className='icons-container'>
          <a
            className='footer-icons'
            href='https://www.facebook.com/mychamachine'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Facebook />
          </a>
          <a
            className='footer-icons'
            href='https://www.instagram.com/mychachicago/?hl=en'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Instagram />
          </a>
          <a
            className='footer-icons'
            href='https://www.yelp.com/biz/mycha-chicago-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Yelp />
          </a>
        </div>

        <div className='contact-footercontainer'>
          <PhoneIcon />
          &nbsp; (847) 260-8387
        </div>

        <a
          className='contact-footercontainer footer-hov-mailpa'
          href='mailto:mychamachine@gmail.com'
          style={{ cursor: "pointer" }}
        >
          <Mail />
          &nbsp; <span className='footer-hov-mail'>mychamachine@gmail.com</span>
        </a>

        <div className='ul-footer'>
          {loc.pathname === "/" ? (
            <div
              className='li-footer footer-hov'
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </div>
          ) : (
            <a
              className='li-footer footer-hov'
              href='/'
              style={{ textDecoration: "none" }}
            >
              Home
            </a>
          )}
          {/* <div
            className='li-footer footer-hov'
            onClick={() => {
              current.slice(current.length - 4, current.length) === "menu"
                ? scrollCatering()
                : history("/menu", { state: { from: "catering" } });
            }}
          >
            Catering
          </div> */}
          <div
            className='li-footer footer-hov'
            onClick={() => {
              loc.pathname === "/menu"
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : history("/menu");
            }}
          >
            Menu
          </div>
          <div
            className='li-footer footer-hov'
            onClick={() => history("/locations")}
          >
            Locations
          </div>

          <div
            className='li-footer footer-hov'
            onClick={() => {
              loc.pathname === "/locations/check"
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : history("/locations/check");
            }}
          >
            Stock Checker
          </div>

          <div
            className='li-footer footer-hov'
            onClick={() => {
              loc.pathname === "/contact"
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : history("/contact");
            }}
          >
            Contact
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{ fontSize: "22px", marginTop: "5px", marginRight: "5px" }}
          >
            ©{" "}
          </div>
          2022 Mycha LLC
        </div>
        <div style={{ fontStyle: "italic" }}>
          Life is full of important choices
        </div>
      </div>
    </div>
  );
};

export default Footer;
