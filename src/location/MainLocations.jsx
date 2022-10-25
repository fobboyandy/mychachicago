import React, { useEffect, useState } from "react";
import Background from "../Background";
import "./location.scss";
import { location } from "./locationsobj";

import LocationWord from "../longstuff/LocationsWord";

import $ from "jquery";
import gsap from "gsap";

const MainLocations = () => {
  useEffect(() => {
    gsap.fromTo(
      "#locationword",
      { opacity: 0, y: "-70%" },
      { opacity: 1, y: 0, duration: 1.2 }
    );

    gsap.fromTo(
      "#uice",
      { opacity: 0, x: "-10%" },
      { opacity: 1, x: 0, duration: 1.4 }
    );

    gsap.fromTo(
      "#uicw",
      { opacity: 0, x: "-10%" },
      { opacity: 1, x: 0, duration: 1.4 }
    );
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const one = document.getElementById("intersecting-locations1");
    const two = document.getElementById("intersecting-locations2");
    const three = document.getElementById("intersecting-locations3");
    const observer1 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            "#b37ped",
            { opacity: 0, x: "-10%" },
            { opacity: 1, x: 0, duration: 1.4 }
          );

          gsap.fromTo(
            "#uicbsb",
            { opacity: 0, x: "-10%" },
            { opacity: 1, x: 0, duration: 1.4 }
          );

          observer1.unobserve(one);
        }
      });
    });

    const observer2 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            "#rushu",
            { opacity: 0, x: "-10%" },
            { opacity: 1, x: 0, duration: 1.4 }
          );

          gsap.fromTo(
            "#bpapa",
            { opacity: 0, x: "-10%" },
            { opacity: 1, x: 0, duration: 1.4 }
          );

          observer2.unobserve(two);
        }
      });
    });

    const observer3 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            "#uchimed",
            { opacity: 0, x: "-10%" },
            { opacity: 1, x: 0, duration: 1.4 }
          );

          //use this for new location
          // gsap.fromTo(
          //   "#bpapa",
          //   { opacity: 0, x: "-10%" },
          //   { opacity: 1, x: 0, duration: 1.4 }
          // );

          observer3.unobserve(three);
        }
      });
    });

    if (window.innerWidth > 700) {
      observer1.observe(one);
      observer2.observe(two);
      observer3.observe(three);
    }
  }, [window.innerWidth]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        overflow: "hidden",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="location-actualparent"
    >
      <div className="outer-location">
        <div className="parent-location"></div>
        <div className="locations-header">
          <LocationWord />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "60vh",
          backgroundColor: "white",
          zIndex: 2,
        }}
        className=" background-gif"
      />

      <div style={{ width: "80%" }} className="container-locations">
        <div id="intersecting-locations1" />
        <div id="intersecting-locations2" />
        <div id="intersecting-locations3" />
        {location.map((location, i) => (
          <div
            className={`container-info ${window.innerWidth > 700 ? "op0" : ""}`}
            id={location.id}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={location.image}
                alt="uiceast"
                className="img-location"
              />
            </div>
            <div className="location-name ">{location.name}</div>
            <div className="location-add location-desc">{location.address}</div>
            <div className="location-hours location-desc">
              {location.hours !== "" ? ` ${location.hours}` : ""}
            </div>

            <div className="location-checkqty">
              <img
                src="https://cdn.discordapp.com/attachments/779278654714675232/1031734843148615720/leafnobg.png"
                style={{ height: "45px", width: "45px", userSelect: "none" }}
              />
              <div className="check-stock location-desc">
                Check Location Stock
              </div>
            </div>
          </div>
        ))}
      </div>
      <Background />
    </div>
  );
};

export default MainLocations;
