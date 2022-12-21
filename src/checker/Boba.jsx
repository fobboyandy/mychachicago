import React, { useEffect } from "react";
import "../index.scss";

import { cups2 } from "./CupsObj";

const Boba = ({ drink }) => {
  useEffect(() => {
    let v = document.getElementById(drink.id + "cup");
    const id = drink.htmlid;

    v.innerHTML = JSON.parse(JSON.stringify(cups2[id]())) || cups2.default;
  }, []);

  return <div className='drink-cups' id={drink.id + "cup"}></div>;
};

export default Boba;
