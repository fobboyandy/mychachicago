import React, { useEffect } from "react";
import Background from "../Background";
import "./menu.scss";

import gsap from "gsap";

import Leaf from "../longstuff/Leaf";
import { menuobj } from "./menuobj";
import { useNavigate, useLocation } from "react-router-dom";

import MenuCup1 from "./menucups/MenuCup1";
import Oranges from "./menucups/Oranges";
import Grapefruit from "./menucups/Grapefruit";
import Lime from "./menucups/Lime";
import Mychamenu from "./menucups/Mychamenu";
import Pfruit from "./menucups/Pfruit";
import PockyMenu from "./menucups/PockyMenu";
import Catering from "./Catering";

const Menu = () => {
  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      "#pfruit",
      { opacity: 0, x: "50%" },
      { opacity: 1, x: 0, duration: 1.2 }
    );

    gsap.fromTo(
      "#pockymenu",
      { opacity: 0, x: "50%" },
      { opacity: 1, x: 0, duration: 1.2 }
    );

    gsap.fromTo(
      "#menucup1",
      { opacity: 0, x: "-50%" },
      { opacity: 1, x: 0, duration: 1.2 }
    );

    gsap.fromTo(
      "#lime",
      { opacity: 0, x: "-50%" },
      { opacity: 1, x: 0, duration: 1.2 }
    );

    gsap.fromTo(
      "#grapefruit",
      { opacity: 0, y: "-50%" },
      { opacity: 1, y: 0, duration: 1.2 }
    );

    gsap.fromTo(
      "#oranges",
      { opacity: 0, x: "50%" },
      { opacity: 1, x: 0, duration: 1.2 }
    );

    gsap.fromTo(
      "#mychamenu",
      { opacity: 0, y: "50%" },
      { opacity: 1, y: 0, duration: 1.2 }
    );

    gsap.fromTo(
      "#fruitteasection",
      { opacity: 0, x: "-10%" },
      { opacity: 1, x: 0, duration: 1.2 }
    );

    const milktea = document.getElementsByClassName(
      "intersecting-milkteasection"
    )[0];
    const special = document.getElementsByClassName(
      "intersecting-specialsection"
    )[0];

    const cater = document.getElementById("catering-intersectingobserver");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            "#milkteasection",
            { opacity: 0, x: "-10%" },
            { opacity: 1, x: 0, duration: 1.2 }
          );
          observer.unobserve(milktea);
        }
      });
    });

    const observer2 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            "#specialsection",
            { opacity: 0, x: "-10%" },
            { opacity: 1, x: 0, duration: 1.2 }
          );
          observer2.unobserve(special);
        }
      });
    });

    const observer3 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            "#catering-p",
            { opacity: 0, x: "-10%" },
            { opacity: 1, x: 0, duration: 1.2 }
          );
          observer3.unobserve(cater);
        }
      });
    });

    observer.observe(milktea);
    observer2.observe(special);
    observer3.observe(cater);
  }, []);

  useEffect(() => {
    if (location.state) {
      switch (location.state.from) {
        case "fruit":
          const fruittea = document.getElementById("fruitteasection");
          fruittea.scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth",
          });
          break;
        case "milktea":
          const milktea = document.getElementById("milkteasection");
          milktea.scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth",
          });
          break;
        case "special":
          const speciality = document.getElementById("specialsection");
          speciality.scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth",
          });

          break;

        case "catering":
          const catering = document
            .getElementById("catering-p")
            .getBoundingClientRect();

          window.scrollTo({
            top: catering.top + window.pageYOffset - 100,
            behavior: "smooth",
          });
          break;
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <div className="sliding-placeholder">
        <MenuCup1 />
        <Oranges />
        <Grapefruit />
        <Lime />
        <Mychamenu />
        <Pfruit />
        <PockyMenu />
      </div>
      <div className="outercontainer-menu">
        <div className="innercontainer-menu">
          {menuobj.map((section) => (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                marginBottom: section.id === "milkteasection" ? "17vh" : "9vh",
                position: "relative",
                opacity: 0,
              }}
              id={section.id}
            >
              <div className={`intersecting-${section.id}`} />
              <div className="menu-title">
                <Leaf />
                {section.section}
              </div>
              <div
                style={{
                  backgroundColor: "rgb(109, 214, 49) ",
                }}
                className="menu-divider"
              />
              <div className="container-sectionmenu">
                {section.items.map((item) => (
                  <div className="menu-half" id={item.htmlid}>
                    <div className="img-menucontainer">
                      <div
                        className="img-menu"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          border: "2px solid rgb(109, 214, 49) ",
                        }}
                      />
                    </div>

                    <div className="menu-txtcontainer">
                      <div className="name-menu">{item.name}</div>
                      <div>
                        <span
                          style={{
                            cursor: "pointer",
                            marginTop: "8px",
                            textDecoration: "underline",
                          }}
                          onClick={() => history(`/menu/${item.id}`)}
                        >
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Catering />
        </div>
      </div>

      <Background />
    </div>
  );
};

export default Menu;
