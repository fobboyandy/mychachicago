import React from "react";
import "./index.scss";

import Cup from "./longstuff/Cup";
import Cup2 from "./longstuff/Cup2";
import Cup3 from "./longstuff/Cup3";
import Machine2 from "./longstuff/Machine2";

const Background = () => {
  return (
    <div style={{ top: 0, position: "fixed" }} className="fixed-background">
      <Cup />
      <Machine2 />
      <Cup2 />
      <Cup3 />
    </div>
  );
};

export default Background;
