import React, { useEffect } from "react";
import Background from "../Background";
import MainLocations from "../location/MainLocations";
import "./home.scss";
import Nav from "./Nav";
import Scrolldiv from "./Scrolldiv";
import Section2 from "./Section2";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
