import React, { useEffect, useState } from "react";
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
                src="assets/leafnobg.png"
                style={{ height: "45px", width: "45px", userSelect: "none" }}
              />
              <div className="check-stock">Check Location Stock</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainLocations;
