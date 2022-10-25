import React from "react";
import "./index.scss";

import Cup from "./longstuff/Cup";
import Cup2 from "./longstuff/Cup2";
import Cup3 from "./longstuff/Cup3";
import Machine2 from "./longstuff/Machine2";
import PalmTree from "./longstuff/PalmTree";
import Pocky from "./longstuff/Pocky";

const Background = () => {
  return (
    <div
      style={{ top: "8.5vh", position: "fixed" }}
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
