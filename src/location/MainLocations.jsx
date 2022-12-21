import React, { useEffect, useState } from "react";
import Background from "../Background";
import "./location.scss";
import { location } from "./locationsobj";

import LocationWord from "../longstuff/LocationsWord";

import $ from "jquery";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const MainLocations = () => {
  const history = useNavigate();

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

          gsap.fromTo(
            "#unionstation",
            { opacity: 0, x: "-10%" },
            { opacity: 1, x: 0, duration: 1.4 }
          );

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    gsap.fromTo("#outerlocation", { opacity: 0 }, { opacity: 1, duration: 3 });
  }, []);

  return (
    <div className='location-actualparent'>
      <div className='outer-location' id='outerlocation'>
        <div className='parent-location'></div>
        <div className='locations-header'>
          <LocationWord />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "60vh",
        }}
        className=' background-gif'
      />

      <div className='heightholder-locations' />

      <div
        style={{
          width: "80%",
          backgroundColor: "white",
          zIndex: 4,
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "5vh",
        }}
        className='container-locations'
      >
        <div id='intersecting-locations1' />
        <div id='intersecting-locations2' />
        <div id='intersecting-locations3' />
        {location.map((location, i) => (
          <div
            className={`container-info ${window.innerWidth > 700 ? "op0" : ""}`}
            id={location.id}
            key={location.id}
          >
            <div style={{ width: "100%", height: "60%" }}>
              <img
                src={location.image}
                alt='uiceast'
                className='img-location'
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className='location-name '>{location.name}</div>
              <div className='location-add location-desc'>
                {location.address}
              </div>
              <div className='location-hours location-desc'>
                {location.hours !== "" ? ` ${location.hours}` : ""}
              </div>

              <div className='location-checkqty'>
                <img
                  src='../assets/leafdivider.png'
                  style={{ height: "45px", width: "45px", userSelect: "none" }}
                  alt='leafdivider'
                />
                <div
                  className='check-stock location-desc'
                  onClick={() =>
                    history(`/locations/check`, {
                      state: { from: location.id },
                    })
                  }
                >
                  Check Location Stock
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Background /> */}
    </div>
  );
};

export default MainLocations;
