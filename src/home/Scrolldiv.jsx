import React, { useCallback, useEffect, useRef, useState } from "react";
import $ from "jquery";

import gsap from "gsap";

const Scrolldiv = () => {
  const containerRef = useRef(null);

  const [vpWidth, setVpWidth] = useState(0);
  const [smooth, setSmooth] = useState(true);

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
      if (document.hidden) {
        return setTimeout(() => {
          init(value, notfirst);
        }, 500);
      }

      if (value === 0 && notfirst) {
        setSmooth(true);
        return setTimeout(() => {
          containerRef.current.scrollLeft += vpWidth;
          init(value + 1);
        }, 5000);
      }

      if (value === 3) {
        setTimeout(() => {
          containerRef.current.scrollLeft += vpWidth;
          setSmooth(false);

          setTimeout(() => {
            containerRef.current.scrollLeft += -10000;
            init(0, true);
          }, 2000);
        }, 7000);
      } else {
        setSmooth(true);
        setTimeout(() => {
          containerRef.current.scrollLeft += vpWidth - 15.5;
          init(value + 1);
        }, 7000);
      }
    };
    init(0);
  }, [vpWidth]);

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
          <div className="container-titledesc">
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
          <div className="container-titledesc">
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
          <div className="container-titledesc">
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
          <div className="container-titledesc">
            <div className="scroll-title">Locations across Chicagoland</div>
            <div className="scroll-desc">
              We have many locations across Chicago and constantly adding more.
              Find one near you.
            </div>
            <a className="our-locations-btn" href="/locations">
              Our Locations
            </a>
          </div>
        </div>
        <div className="child-scroll" style={{ width: vpWidth + "px" }}>
          <div className="container-titledesc">
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
