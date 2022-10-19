import React from "react";
import "./home.scss";

const Section2 = () => {
  return (
    <div className="container-section2">
      <div className="innercontainer-section2">
        <div className="head-section2">Mycha's Story</div>
        <img
          src="https://cdn.discordapp.com/attachments/779278654714675232/1031734843148615720/leafnobg.png"
          style={{
            height: "85px",
            width: "85px",
            userSelect: "none",
            transform: "rotate(17deg)",
          }}
        />

        <div className="desc-section2">
          FILL WITH STORY Mycha is a self-service fridge with a variety of
          bubble tea, fruit tea, and coffee selections. Mycha provides popular
          Asian drinks on the spot 24/7 in the Chicagoland, making this an
          extremely convenient option for you on a regular basis.
        </div>

        <div className="head-section2" style={{ marginTop: "20vh" }}>
          Menu
        </div>

        <div className="desc-section2">Our menu consists of:</div>
        <div className="menucontainer-section2">
          <div id="first-menu" className="image-menu" text="Fruit Tea" />
          <div id="second-menu" className="image-menu" text="Milk Tea" />
          <div id="third-menu" className="image-menu" text="Specialty Drinks" />
        </div>

        <div
          style={{
            textDecoration: "underline",
            fontSize: "22px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          See our full menu
        </div>
      </div>
    </div>
  );
};

export default Section2;
