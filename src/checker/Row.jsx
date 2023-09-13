import React from "react";
import Boba from "./Boba";

const Row = ({ selected, col, row, drinkImgObj }) => {
  return (
    <div
      className='drow-parent'
      style={{
        filter: selected[1] === 0 && "grayscale(1)",
        opacity: selected[1] === 0 && ".3",
        cursor: "pointer",
      }}
      onClick={() => {
        const find = $(
          `#tr-${selected[0].replace(/ /g, "-")}`
        )[0]?.getBoundingClientRect().top;

        if (!find) return;

        const navheight = $(".nav-home")[0]?.getBoundingClientRect().height;

        window.scrollTo({
          top: find + window.scrollY - navheight - 20,
          behavior: "smooth",
        });

        $(".tr-q").removeClass("tr-hov"); //remove hover class

        setTimeout(() => {
          $(`#tr-${selected[0].replace(/ /g, "-")}`).addClass("tr-active");

          setTimeout(() => {
            $(`#tr-${selected[0].replace(/ /g, "-")}`).removeClass("tr-active");
            $(".tr-q").addClass("tr-hov");
          }, 1000);
        }, 1000);
      }}
    >
      <Boba drink={selected[0]} col={col} row={row} drinkImgObj={drinkImgObj} />
      <div className='drow-stock'>{selected[1]}</div>
    </div>
  );
};

export default Row;
