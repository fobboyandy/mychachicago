import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";

const Scrolldiv = () => {
  const containerRef = useRef(null);

  const [vpWidth, setVpWidth] = useState(0);
  const [smooth, setSmooth] = useState(true);

  useEffect(() => {
    const value = window.innerWidth;
    setVpWidth(value);
  }, []);

  useEffect(() => {
    if (!vpWidth) return;
    const init = (value, notfirst) => {
      if (document.hidden) {
        return setTimeout(() => {
          init(value, notfirst);
        }, 500);
      }
      console.log(value);

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
          }, 5000);
        }, 10000);
      } else {
        setSmooth(true);
        setTimeout(() => {
          containerRef.current.scrollLeft += vpWidth;
          init(value + 1);
        }, 10000);
      }
    };
    init(0);
  }, [vpWidth]);

  return (
    <div className='container-scroll' id='scrollcontainer'>
      <div
        id='container2'
        ref={containerRef}
        style={{ scrollBehavior: smooth ? "smooth" : "auto" }}
      >
        <div
          className='child-scroll'
          id='b37'
          style={{ width: vpWidth + "px" }}
        ></div>
        <div
          className='child-scroll'
          id='uic'
          style={{ width: vpWidth + "px" }}
        ></div>
        <div
          className='child-scroll'
          id='ucmed'
          style={{ width: vpWidth + "px" }}
        ></div>
        <div
          className='child-scroll'
          id='rush'
          style={{ width: vpWidth + "px" }}
        ></div>
        <div
          className='child-scroll'
          id='b37'
          style={{ width: vpWidth + "px" }}
        ></div>
      </div>
    </div>
  );
};

export default Scrolldiv;
