import React from "react";
import Background from "../Background";
import MainLocations from "../location/MainLocations";
import "./home.scss";
import Nav from "./Nav";
import Scrolldiv from "./Scrolldiv";

const Home = () => {
  return (
    <div id="parent">
      <Nav />
      <Scrolldiv />
      <MainLocations />
      <Background />
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default Home;
