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

  useEffect(() => {
    $(document).ready(() => {
      if (state.state?.from === "contact") {
        const contact = document
          .getElementById("contactparent")
          .getBoundingClientRect();

        window.scrollTo({
          top: contact.top + window.pageYOffset - 10,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log("ran");
      }
    });
  }, []);
  return (
    <div id="parent" style={{ marginTop: "11vh" }}>
      <Scrolldiv />
      <Section2 />
      <Background />
    </div>
  );
};

export default Home;
