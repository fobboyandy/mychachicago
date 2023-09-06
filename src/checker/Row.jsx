import React from "react";
import Boba from "./Boba";

const Row = ({ selected, col, row, drinkImgObj }) => {
  return (
    <div
      className='drow-parent'
      style={{
        filter: selected[1] === 0 && "grayscale(1)",
        opacity: selected[1] === 0 && ".3",
      }}
    >
      <Boba drink={selected[0]} col={col} row={row} drinkImgObj={drinkImgObj} />
      <div className='drow-stock'>{selected[1]}</div>
    </div>
  );
};

export default Row;
