import React from "react";
import "./home.scss";

import Leaf from "../longstuff/Leaf";

const Section2 = () => {
  return (
    <div className="container-section2">
      <div className="innercontainer-section2">
        <div className="head-section2">Mycha's Story</div>
        <Leaf />

        <div className="desc-section2">
          FILL WITH STORY Mycha is a self-service fridge with a variety of
          bubble tea, fruit tea, and coffee selections. Mycha provides popular
          Asian drinks on the spot 24/7 in the Chicagoland, making this an
          extremely convenient option for you on a regular basis.
        </div>

        <div className="head-section2" style={{ marginTop: "15vh" }}>
          Menu
        </div>

        <div className="desc-section2">Our menu consists of:</div>
        <div className="menucontainer-section2">
          <div id="first-menu" className="image-menu" text="Fruit Teas" />
          <div id="second-menu" className="image-menu" text="Milk Teas" />
          <div id="third-menu" className="image-menu" text="Specialty Drinks" />
        </div>

        <a
          style={{
            textDecoration: "underline",
            fontSize: "22px",
            cursor: "pointer",
            marginTop: "25px",
            color: "rgba(51,51,51)",
          }}
          href="/menu"
        >
          See our full menu
        </a>

        <div className="head-section2" style={{ marginTop: "15vh" }}>
          How We Operate
        </div>
        <Leaf />
        <div className="desc-section2">
          Mycha is dedicated to providing you the best quality drinks using the
          most convenient form of service. We select premium tea leaves from the
          most authentic tea plantations to ensure a real tea enjoyment. We
          prepare hand-crafted drinks daily in our health department regulated
          kitchen and stock our machines with fresh products every morning.
        </div>

        <div className="desc-section2" style={{ marginTop: "30px" }}>
          At Mycha, we guarantee quality and freshness. Our drinks have a shelf
          life of 24-48 hours and drinks that reach this point are immediately
          removed
        </div>
      </div>
    </div>
  );
};

export default Section2;
