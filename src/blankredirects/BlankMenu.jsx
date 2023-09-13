import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const BlankMenu = () => {
  const nav = useNavigate();

  useEffect(() => {
    nav("/menu");
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

export default BlankMenu;
