import React, { useEffect } from "react";
import "../index.scss";

import { cups2 } from "./CupsObj";

const Boba = ({ drink, col, row }) => {
  useEffect(() => {
    let v = document.getElementById(`${drink}-cup-${col}-${row}`);
    const id = drink;

    v.innerHTML = JSON.parse(JSON.stringify(cups2[id]())) || cups2.default;
  }, []);

  return <div className='drink-cups' id={`${drink}-cup-${col}-${row}`}></div>;
};

export default Boba;
