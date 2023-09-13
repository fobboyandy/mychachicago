import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const BlankLocations = () => {
  const nav = useNavigate();

  useEffect(() => {
    nav("/locations");
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "100000000000",
        backgroundColor: "white",
      }}
    ></div>
  );
};

export default BlankLocations;
