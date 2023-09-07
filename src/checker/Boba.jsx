import React, { useEffect } from "react";
import "../index.scss";

import ReactDOMServer from "react-dom/server";

import { cups2 } from "./CupsObj";
import ImagetoSvg from "./checkerimages/ImgtoSvg";

const Boba = ({ drink, col, row, drinkImgObj }) => {
  useEffect(() => {
    let v = document.getElementById(`${drink}-cup-${col}-${row}`);
    console.log(drinkImgObj);
    console.log(drink);

    // v.innerHTML = cups2[id]
    //   ? JSON.parse(JSON.stringify(cups2[id]()))
    //   : cups2.default;

    v.innerHTML = drinkImgObj[drink]
      ? ReactDOMServer.renderToString(
          <ImagetoSvg
            image={drinkImgObj[drink]?.img}
            idv={drinkImgObj[drink]?.id}
          />
        )
      : cups2.default;
  }, [drink]);

  return <div className='drink-cups' id={`${drink}-cup-${col}-${row}`}></div>;
};

export default Boba;
