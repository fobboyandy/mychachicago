import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Blank = () => {
  const nav = useNavigate();

  useEffect(() => {
    nav("/contact");
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

export default Blank;
