import React from "react";
import { useEffect } from "react";

import par from "simple-parallax-js";

import "./ev.scss";

import $ from "jquery";

const Events = () => {
  useEffect(() => {
    const c = document.querySelectorAll(".ev-backgroundimg");

    new par(c, {
      scale: 1.1,
      orientation: "down",
    });
  }, []);

  return (
    <div className='ev-parent'>
      <img
        src='/assets/catering/test1.webp'
        alt='img1'
        className='ev-backgroundimg'
      />

      <div
        className='ev-height
      '
      />
      <div className='ev-te'>somerandomtext123</div>
    </div>
  );
};

export default Events;
