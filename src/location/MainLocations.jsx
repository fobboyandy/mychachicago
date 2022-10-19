import React, { useEffect, useState } from "react";
import Background from "../Background";
import "./location.scss";
import { location } from "./locationsobj";

const MainLocations = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: "5vh",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "80%" }} className="container-locations">
        {location.map((location, i) => (
          <div className="container-info">
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={location.image}
                alt="uiceast"
                className="img-location"
              />
            </div>
            <div className="location-name">{location.name}</div>
            <div className="location-add">{location.address}</div>
            <div className="location-hours">
              {location.hours !== "" ? ` ${location.hours}` : ""}
            </div>

            <div className="location-checkqty">
              <img
                src="https://cdn.discordapp.com/attachments/779278654714675232/1031734843148615720/leafnobg.png"
                style={{ height: "45px", width: "45px", userSelect: "none" }}
              />
              <div className="check-stock">Check Location Stock</div>
            </div>
          </div>
        ))}
      </div>
      <Background />
    </div>
  );
};

export default MainLocations;
