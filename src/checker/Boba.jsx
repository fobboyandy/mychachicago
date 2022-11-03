import React, { useEffect } from "react";
import "../index.scss";
import ReactDOMServer from "react-dom/server";

import { cups2 } from "./CupsObj";

const Boba = ({ drink, setIsLoading }) => {
  useEffect(() => {
    let v = document.getElementById(drink.id + "cup");
    const id = drink.htmlid;

    v.innerHTML = JSON.parse(JSON.stringify(cups2[id]())) || cups2.default;
  }, []);

  return <div className="drink-cups" id={drink.id + "cup"}></div>;
};

export default Boba;
