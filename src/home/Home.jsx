import React from "react";
import "./home.scss";
import Nav from "./Nav";
import Scrolldiv from "./Scrolldiv";

const Home = () => {
  return (
    <div id='parent'>
      <Nav />
      <Scrolldiv />
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default Home;
