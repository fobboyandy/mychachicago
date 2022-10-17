import React from "react";
import "./location.scss";
import { location } from "./locationsobj";

const MainLocations = () => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <div style={{ width: "80%" }} className='container-locations'>
        {location.map((location) => (
          <div className='container-info'>
            <img src={location.image} alt='uiceast' />
            <div className='location-name'>{location.name}</div>
            <div className='location-add'>{location.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainLocations;
