import React, { useCallback, useEffect, useRef, useState } from "react";
import $ from "jquery";

import gsap from "gsap";

const Scrolldiv = () => {
  const containerRef = useRef(null);

  const [vpWidth, setVpWidth] = useState(0);
  const [smooth, setSmooth] = useState(false);

  useEffect(() => {
    const value = window.innerWidth;
    setVpWidth(value);
  }, []);

  const resize = useCallback(() => {
    setVpWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  useEffect(() => {
    if (!vpWidth) return;
    const init = (value, notfirst) => {
      console.log("value", value);
      if (document.hidden) {
        return setTimeout(() => {
          init(value, notfirst);
        }, 500);
      }

      if (value === 0 && notfirst) {
        // setSmooth(true);
        return setTimeout(() => {
          containerRef.current.scrollLeft += vpWidth;
          init(value + 1);
        }, 7600);
      }

      if (value === 3) {
        setTimeout(() => {
          containerRef.current.scrollLeft += -10000;
          init(0, true);
        }, 7600);
      } else {
        // setSmooth(true);
        setTimeout(() => {
          containerRef.current.scrollLeft += vpWidth - 15.5;
          init(value + 1);
        }, 7600);
      }
    };
    init(0);
  }, [vpWidth]);

  useEffect(() => {
    const init = (num, bool) => {
      if (document.hidden) {
        return setTimeout(() => {
          init(num, bool);
        }, 500);
      }
      if (num === 0 && bool) {
        gsap.fromTo(
          "#scroll-one",
          { opacity: 0, x: "20%" },
          { opacity: 1, x: 0 }
        );

        setTimeout(() => {
          gsap.fromTo(
            "#scroll-one",
            { opacity: 1, x: 0 },
            { opacity: 0, x: "-50%" }
          );

          setTimeout(() => {
            init(1);
          }, 1400);
        }, 6200);

        return;
      }

      switch (num) {
        case 0:
          gsap.fromTo(
            "#scroll-one",
            { opacity: 0, x: "20%" },
            { opacity: 1, x: 0 }
          );

          setTimeout(() => {
            gsap.fromTo(
              "#scroll-one",
              { opacity: 1, x: 0 },
              { opacity: 0, x: "-50%" }
            );

            setTimeout(() => {
              init(1);
            }, 1400);
          }, 6200);
          break;
        case 1:
          gsap.fromTo(
            "#scroll-two",
            { opacity: 0, x: "20%" },
            { opacity: 1, x: 0 }
          );

          setTimeout(() => {
            gsap.fromTo(
              "#scroll-two",
              { opacity: 1, x: 0 },
              { opacity: 0, x: "-50%" }
            );

            setTimeout(() => {
              init(2);
            }, 1400);
          }, 6200);
          break;

        case 2:
          gsap.fromTo(
            "#scroll-three",
            { opacity: 0, x: "20%" },
            { opacity: 1, x: 0 }
          );

          setTimeout(() => {
            gsap.fromTo(
              "#scroll-three",
              { opacity: 1, x: 0 },
              { opacity: 0, x: "-50%" }
            );

            setTimeout(() => {
              init(3);
            }, 1400);
          }, 6200);
          break;

        case 3:
          gsap.fromTo(
            "#scroll-four",
            { opacity: 0, x: "20%" },
            { opacity: 1, x: 0 }
          );

          setTimeout(() => {
            gsap.fromTo(
              "#scroll-four",
              { opacity: 1, x: 0 },
              { opacity: 0, x: "-50%" }
            );

            setTimeout(() => {
              init(0, true);
            }, 1400);
          }, 6200);
          break;
      }
    };

    init(0);
  }, []);

  return (
    <div className="container-scroll" id="scrollcontainer">
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <div
        id="container2"
        ref={containerRef}
        style={{ scrollBehavior: smooth ? "smooth" : "auto", zIndex: 8 }}
      >
        <div
          className="child-scroll"
          id="b37"
          style={{ width: vpWidth + "px" }}
        >
          <div className="container-titledesc op0" id="scroll-one">
            <div className="scroll-title">The Milk Tea ATM</div>
            <div className="scroll-desc">
              Mycha is a self-service fridge with a variety of bubble tea, fruit
              tea, and coffee selections.
            </div>
          </div>
        </div>
        <div
          className="child-scroll"
          id="uic"
          style={{ width: vpWidth + "px" }}
        >
          <div className="container-titledesc op0" id="scroll-two">
            <div className="scroll-title">
              Made Fresh with the Best Ingredients
            </div>
            <div className="scroll-desc">
              Our drinks are made daily with premium tea leaves from the most
              authentic tea plantations.
            </div>
          </div>
        </div>
        <div
          className="child-scroll"
          id="ucmed"
          style={{ width: vpWidth + "px" }}
        >
          <div className="container-titledesc op0" id="scroll-three">
            <div className="scroll-title">Drinks at Your Convenience</div>
            <div className="scroll-desc">
              No more waiting. Grab and go at our machines in under a minute.
            </div>
          </div>
        </div>
        <div
          className="child-scroll"
          id="rush"
          style={{ width: vpWidth + "px" }}
        >
          <div className="container-titledesc op0" id="scroll-four">
            <div className="scroll-title">Locations across Chicagoland</div>
            <div className="scroll-desc">
              We have many locations across Chicago and constantly adding more.
            </div>
            <a className="our-locations-btn" href="/locations">
              Find one near you
            </a>
          </div>
        </div>
        <div className="child-scroll" style={{ width: vpWidth + "px" }}>
          <div className="container-titledesc op0" id="scroll-five">
            <div className="scroll-title">The Milk Tea ATM</div>
            <div className="scroll-desc">
              Mycha is a self-service fridge with a variety of bubble tea, fruit
              tea, and coffee selections.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrolldiv;
