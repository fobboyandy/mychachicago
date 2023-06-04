import React from "react";
import Boba from "./Boba";

import { cups2 } from "./CupsObj";

const Row = ({ selected, col, row }) => {
  if (selected[0].toLowerCase() === "snack") return;
  return (
    <div className='drow-parent'>
      <Boba drink={selected[0]} col={col} row={row} />
      <div className='drow-stock'>{selected[1]}</div>
    </div>
  );
};

export default Row;
