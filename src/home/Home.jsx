import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Background from "../Background";
import MainLocations from "../location/MainLocations";
import "./home.scss";
import Nav from "./Nav";
import Scrolldiv from "./Scrolldiv";
import Section2 from "./Section2";

import $ from "jquery";

const Home = () => {
  const state = useLocation();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  useEffect(() => {
    $(document).ready(() => {
      if (state.state?.from === "contact") {
        $("#contactparent")[0].scrollIntoView({
          behavior: "smooth",
        });
      } else {
        window.scrollTo({ top: 0 });
      }
    });
  }, []);
  return (
    <div id="parent" style={{ marginTop: "11vh" }}>
      <Scrolldiv />
      <Section2 />
      <Background />

      {/* <div style={{ height: "100vh" }}></div> */}
    </div>
  );
};

export default Home;
