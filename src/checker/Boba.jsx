import React, { useEffect } from "react";
import "../index.scss";

import { cups } from "./cupsobj";

const Boba = ({ drink }) => {
  useEffect(() => {
    let v = document.getElementById(drink.id + "cup");

    v.innerHTML = JSON.parse(JSON.stringify(cups.default));
  }, []);

  return <div className="drink-cups" id={drink.id + "cup"}></div>;
};

export default Boba;
