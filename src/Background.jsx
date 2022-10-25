import React, { useCallback, useEffect, useState } from "react";
import "./index.scss";

import Cup from "./longstuff/Cup";
import Cup2 from "./longstuff/Cup2";
import Cup3 from "./longstuff/Cup3";
import Machine2 from "./longstuff/Machine2";
import PalmTree from "./longstuff/PalmTree";
import Pocky from "./longstuff/Pocky";

const Background = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const resized = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resized);

    return () => {
      window.removeEventListener("resize", resized);
    };
  }, [window.innerWidth]);
  return (
    <div
      style={{
        top: "8.5vh",
        position: "fixed",
        opacity: width < 700 ? 0.1 : 0.8,
      }}
      className="fixed-background"
    >
      <Cup />
      <Machine2 />
      <Cup2 />
      <Cup3 />
      <Pocky />
      <PalmTree />
    </div>
  );
};

export default Background;
