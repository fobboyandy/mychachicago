import React, { useCallback, useEffect, useRef, useState } from "react";

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
    let stop = false;

    if (!vpWidth) return;
    const init = (value, notfirst) => {
      if (stop) return;
      if (document.hidden) {
        if (stop) return;
        return setTimeout(() => {
          if (stop) return;
          init(value, notfirst);
        }, 500);
      }

      if (value === 0 && notfirst) {
        if (stop) return;
        return setTimeout(() => {
          if (stop) return;
          containerRef.current.scrollLeft += vpWidth;
          init(value + 1);
        }, 7600);
      }

      if (value === 3) {
        if (stop) return;
        setTimeout(() => {
          if (stop) return;
          containerRef.current.scrollLeft += -10000;
          init(0, true);
        }, 7600);
      } else {
        if (stop) return;
        setTimeout(() => {
          if (stop) return;
          containerRef.current.scrollLeft += vpWidth - 15.5;
          init(value + 1);
        }, 7600);
      }
    };
    init(0);

    return () => {
      stop = true;
    };
  }, [vpWidth]);

  //stop is to ensure the function does not run when we leave the page. recursive func will keep running when user leaves the page without stop
  useEffect(() => {
    let stop = false;
    const init = (num, bool) => {
      if (stop) return;
      if (document.hidden) {
        if (stop) return;
        return setTimeout(() => {
          init(num, bool);
        }, 500);
      }
      if (num === 0 && bool) {
        if (stop) return;
        gsap.fromTo(
          "#scroll-one",
          { opacity: 0, x: "20%" },
          { opacity: 1, x: 0 }
        );

        setTimeout(() => {
          if (stop) return;
          gsap.fromTo(
            "#scroll-one",
            { opacity: 1, x: 0 },
            { opacity: 0, x: "-50%" }
          );

          setTimeout(() => {
            if (stop) return;
            init(1);
          }, 1400);
        }, 6200);

        return;
      }

      switch (num) {
        case 0:
          if (stop) return;
          gsap.fromTo(
            "#scroll-one",
            { opacity: 0, x: "20%" },
            { opacity: 1, x: 0 }
          );

          setTimeout(() => {
            if (stop) return;
            gsap.fromTo(
              "#scroll-one",
              { opacity: 1, x: 0 },
              { opacity: 0, x: "-50%" }
            );

            setTimeout(() => {
              if (stop) return;
              init(1);
            }, 1400);
          }, 6200);
          break;
        case 1:
          if (stop) return;
          gsap.fromTo(
            "#scroll-two",
            { opacity: 0, x: "20%" },
            { opacity: 1, x: 0 }
          );

          setTimeout(() => {
            if (stop) return;
            gsap.fromTo(
              "#scroll-two",
              { opacity: 1, x: 0 },
              { opacity: 0, x: "-50%" }
            );

            setTimeout(() => {
              if (stop) return;
              init(2);
            }, 1400);
          }, 6200);
          break;

        case 2:
          if (stop) return;
          gsap.fromTo(
            "#scroll-three",
            { opacity: 0, x: "20%" },
            { opacity: 1, x: 0 }
          );

          setTimeout(() => {
            if (stop) return;
            gsap.fromTo(
              "#scroll-three",
              { opacity: 1, x: 0 },
              { opacity: 0, x: "-50%" }
            );

            setTimeout(() => {
              if (stop) return;
              init(3);
            }, 1400);
          }, 6200);
          break;

        case 3:
          if (stop) return;
          gsap.fromTo(
            "#scroll-four",
            { opacity: 0, x: "20%" },
            { opacity: 1, x: 0 }
          );

          setTimeout(() => {
            if (stop) return;
            gsap.fromTo(
              "#scroll-four",
              { opacity: 1, x: 0 },
              { opacity: 0, x: "-50%" }
            );

            setTimeout(() => {
              if (stop) return;
              init(0, true);
            }, 1400);
          }, 6200);
          break;
      }
    };

    init(0);

    return () => {
      stop = true;
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#scroll-one",
      { opacity: 0, x: "10%" },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);

  return (
    <div className='container-scroll' id='scrollcontainer'>
      <div
        id='container2'
        ref={containerRef}
        style={{
          scrollBehavior: smooth ? "smooth" : "auto",
          zIndex: 8,
          position: "relative",
        }}
      >
        <div
          className='child-scroll'
          id='b37'
          style={{ width: vpWidth + "px" }}
        >
          <div className='container-titledesc op0' id='scroll-one'>
            <div className='scroll-title'>The Milk Tea ATM</div>
            <div className='scroll-desc'>
              Mycha is a self-service fridge with a variety of bubble tea, fruit
              tea, and coffee selections.
            </div>
          </div>
        </div>
        <div
          className='child-scroll'
          id='uic'
          style={{ width: vpWidth + "px" }}
        >
          <div className='container-titledesc op0' id='scroll-two'>
            <div className='scroll-title'>Premium Ingredients Only</div>
            <div className='scroll-desc'>
              Our drinks are made daily with premium tea leaves from the most
              authentic tea plantations.
            </div>
          </div>
        </div>
        <div
          className='child-scroll'
          id='ucmed'
          style={{ width: vpWidth + "px" }}
        >
          <div className='container-titledesc op0' id='scroll-three'>
            <div className='scroll-title'>Drinks at Your Convenience</div>
            <div className='scroll-desc'>
              No more waiting. Grab and go at our machines in under a minute.
            </div>
          </div>
        </div>
        <div
          className='child-scroll'
          id='rush'
          style={{ width: vpWidth + "px" }}
        >
          <div className='container-titledesc op0' id='scroll-four'>
            <div className='scroll-title'>Locations across Chicagoland</div>
            <div className='scroll-desc'>
              We have many locations across Chicago and constantly adding more.
            </div>
            <a className='our-locations-btn' href='/locations'>
              Locations
            </a>
          </div>
        </div>
        <div className='child-scroll' style={{ width: vpWidth + "px" }}>
          <div className='container-titledesc op0' id='scroll-five'>
            <div className='scroll-title'>The Milk Tea ATM</div>
            <div className='scroll-desc'>
              Mycha is a self-service fridge with a variety of bubble tea, fruit
              tea, and coffee selections.
            </div>
          </div>
        </div>
      </div>

      <div className='backgroundimage-scrolldiv' />
      <div className='scrolldivoverlay' />
    </div>
  );
};

export default Scrolldiv;
