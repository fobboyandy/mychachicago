import React, { useCallback, useEffect } from "react";

import $ from "jquery";

//two edge cases:
// drinks that only have one size and drinks that have 4 sizes (boba, nb)

const QtyOverlay = ({ drink, stock }) => {
  useEffect(() => {
    const cupheight =
      document.getElementsByClassName("drink-cups")[0].offsetHeight;

    $(`#${drink.id}-qty`).css("display", "flex");
    const overlay = document.getElementById(`${drink.id}-qty`).offsetHeight;
    $(`#${drink.id}-qty`).css("display", "none");

    $(document).ready(() => {
      $(`#${drink.id}`).each((i, e) => {
        const left = e.offsetLeft;
        const top = e.offsetTop;
        const width = e.offsetWidth;
        $(`#${drink.id}-qty`).css(
          "top",
          top + (cupheight - overlay) / 2 + "px"
        );
        $(`#${drink.id}-qty`).css("left", left + width + "px");
      });
    });
  }, [drink]);

  const overlay = useCallback(() => {
    const cupheight =
      document.getElementsByClassName("drink-cups")[0].offsetHeight;

    $(`#${drink.id}-qty`).css("display", "flex");
    const overlay = document.getElementById(`${drink.id}-qty`).offsetHeight;
    $(`#${drink.id}-qty`).css("display", "none");

    $(document).ready(() => {
      $(`#${drink.id}`).each((i, e) => {
        const left = e.offsetLeft;
        const top = e.offsetTop;
        const width = e.offsetWidth;
        $(`#${drink.id}-qty`).css(
          "top",
          top + (cupheight - overlay) / 2 + "px"
        );
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
    <div className=' quantity-display' id={`${drink.id}-qty`}>
      <div
        className='name-overlay'
        style={{ zIndex: 3, marginTop: "10px", textAlign: "center" }}
      >
        {drink.name}
      </div>
      {drink.htmlid === "jasminemilktea" || drink.htmlid === "oolongmilktea" ? (
        <div className='name-overlay' style={{ zIndex: 3 }}>
          <div>Small w Boba: {stock[drink.htmlid].boba[0]}</div>
          <div>Large w Boba: {stock[drink.htmlid].boba[1]}</div>
          <div>Small no Boba: {stock[drink.htmlid].nb[0]}</div>
          <div>Large no Boba: {stock[drink.htmlid].nb[1]}</div>
        </div>
      ) : (
        <div className='name-overlay' style={{ zIndex: 3 }}>
          Small Quantity: {stock[drink.htmlid][0]}
        </div>
      )}
      {drink.htmlid === "jasminemilktea" || drink.htmlid === "oolongmilktea" ? (
        ""
      ) : (
        <div className='name-overlay' style={{ zIndex: 3 }}>
          Large Quantity: {stock[drink.htmlid][1]}
        </div>
      )}
      <div className='pointer' />
    </div>
  );
};

export default QtyOverlay;
