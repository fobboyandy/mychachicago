import React, { useCallback, useEffect } from "react";
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

        $(`#${drink.id}-qty`).css("top", top - height / 2 + "px");
        $(`#${drink.id}-qty`).css("left", left + width + "px");
      });
    });
  }, [drink]);

  const overlay = useCallback(() => {
    $(document).ready(() => {
      $(`#${drink.id}`).each((i, e) => {
        const left = e.offsetLeft;
        const top = e.offsetTop;
        const width = e.offsetWidth;
        const height = e.offsetHeight;

        $(`#${drink.id}-qty`).css("top", top - height / 2 + "px");
        $(`#${drink.id}-qty`).css("left", left + width + "px");
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", overlay);

    return () => {
      window.removeEventListener("resize", overlay);
    };
  }, []);

  return (
    <div className=" quantity-display" id={`${drink.id}-qty`}>
      <div className="name-overlay" style={{ zIndex: 3, marginTop: "10px" }}>
        {drink.name}
      </div>
      <div className="name-overlay" style={{ zIndex: 3 }}>
        Small Quantity: {drink.smallqty}
      </div>
      <div className="name-overlay" style={{ zIndex: 3 }}>
        Large Quantity: {drink.largeqty}
      </div>
      <div className="pointer" />
    </div>
  );
};

export default QtyOverlay;
