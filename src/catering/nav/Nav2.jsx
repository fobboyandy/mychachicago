import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Homelogo from "../../longstuff/Homelogo";

import gsap from "gsap";
import $ from "jquery";

const Nav2 = ({ openNav }) => {
  const history = useNavigate();
  const loc = useLocation();

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
    gsap
      .fromTo(
        ".nav-home",
        { opacity: 0, y: "-30%" },
        { opacity: 1, y: 0, duration: 1 }
      )
      .then(() => {
        setTimeout(() => {
          $(".nav-home").css("border-bottom", "1px solid rgb(240, 240, 240)");
        }, 500);
      });
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

  const boxShadow = useCallback(() => {
    if (window.scrollY > 120) {
      $(".nav-home").css("box-shadow", "0 0 3px black");
    }

    if (window.scrollY < 120) {
      $(".nav-home").css("box-shadow", "none");
    }
  }, []);

  useEffect(() => {
    if (window.scrollY < 120) {
      $(".nav-home").css("box-shadow", "none");
    }
    window.addEventListener("scroll", boxShadow);

    return () => {
      window.removeEventListener("scroll", boxShadow);
    };
  }, []);

  return (
    <div className='nav-home' style={{ zIndex: 15, userSelect: "none" }}>
      <Homelogo history={history} />
      <div style={{ flexGrow: 1 }} />
      <div className='li-container'>
        <div
          className='li-nav'
          onClick={() => {
            loc.pathname === "/events"
              ? window.scrollTo({ top: 0, behavior: "smooth" })
              : history("/events");
          }}
        >
          Events
        </div>

        <div
          className='li-nav'
          onClick={() => {
            loc.pathname === "/shop"
              ? window.scrollTo({ top: 0, behavior: "smooth" })
              : history("/shop");
          }}
        >
          Shop
        </div>

        <div
          className='li-nav'
          onClick={() => {
            loc.pathname === "/contact"
              ? window.scrollTo({ top: 0, behavior: "smooth" })
              : history("/contact");
          }}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Nav2;
