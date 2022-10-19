import React from "react";
import Background from "../Background";
import MainLocations from "../location/MainLocations";
import "./home.scss";
import Nav from "./Nav";
import Scrolldiv from "./Scrolldiv";
import Section2 from "./Section2";

const Home = () => {
  return (
    <div id="parent">
      <Scrolldiv />
      <Section2 />
      <Background />
      {/* <div style={{ height: "100vh" }}></div> */}
    </div>
  );
};

export default Home;
