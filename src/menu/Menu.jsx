import React, { useEffect } from "react";
import Background from "../Background";
import "./menu.scss";

import Leaf from "../longstuff/Leaf";
import { menuobj } from "./menuobj";
import { useNavigate, useLocation } from "react-router-dom";

const Menu = () => {
  const history = useNavigate();
  const location = useLocation();

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
          console.log("ran");
          break;
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);
  return (
    <div>
      <div className="sliding-placeholder">PLACEHOLDER</div>
      <div className="outercontainer-menu">
        <div className="innercontainer-menu">
          {menuobj.map((section) => (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "10vh",
              }}
              id={section.id}
            >
              <div className="menu-title">
                <Leaf />
                {section.section}
              </div>
              <div
                style={{
                  backgroundColor:
                    // section.id === "fruitteasection"
                    //   ? "rgb(109, 214, 49)"
                    //   : section.id === "milkteasection"
                    //   ? " rgb(197, 131, 247)"
                    //   : "rgb(51,51,51)",
                    "rgb(109, 214, 49) ",
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
                          border:
                            // section.id === "fruitteasection"
                            //   ? "2px rgb(109, 214, 49) solid "
                            //   : section.id === "milkteasection"
                            //   ? " 2px solid rgb(197, 131, 247)"
                            //   : "2px solid rgb(51,51,51)",
                            "2px solid rgb(109, 214, 49) ",
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
        </div>
      </div>
      <Background />
    </div>
  );
};

export default Menu;
/*    <div className="menu-half">
                <div className="img-menucontainer">
                  <div
                    className="img-menu"
                    id={items.id}
                    style={{ backgroundImage: `url(${items.image})` }}
                  />
                </div>

                <div className="menu-txtcontainer">
                  <div className="name-menu">{items.name}</div>
                  <div style={{ cursor: "pointer", marginTop: "8px" }}>
                    Learn More
                  </div>
                </div>
              </div>*/
