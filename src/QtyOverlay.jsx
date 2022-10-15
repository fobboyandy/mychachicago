import React, { useEffect } from "react";
import "./index.scss";

import $ from "jquery";

const QtyOverlay = ({ drink }) => {
  useEffect(() => {
    $(document).ready(() => {
      $(`#${drink.id}`).each((i, e) => {
        const left = e.offsetLeft;
        const top = e.offsetTop;
        const width = e.offsetWidth;
        const height = e.offsetHeight;

        $(`#${drink.id}-qty`).css("top", top - height + "px");
        $(`#${drink.id}-qty`).css("left", left + width + "px");
      });
    });
  }, [drink]);

  return (
    <div className=' quantity-display' id={`${drink.id}-qty`}>
      <div className='name-overlay'>{drink.name}</div>
      <div className='name-overlay'>Small Quantity: {drink.smallqty}</div>
      <div className='name-overlay'>Large Quantity: {drink.largeqty}</div>
      <div className='pointer' />
    </div>
  );
};

export default QtyOverlay;
