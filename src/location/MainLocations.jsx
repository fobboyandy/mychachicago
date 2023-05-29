import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";

import "./location.scss";
import "./gmap.scss";

import { location } from "./locationsobj";

import LocationWord from "../longstuff/LocationsWord";

import gsap from "gsap";
import $ from "jquery";

const MainLocations = () => {
  const history = useNavigate();
  const params = useParams();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS,
  });

  //search = location search section, all = all locations section
  const [selectedSection, setSelectedSection] = useState("search");

  const [mapRef, setMapRef] = useState("");
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState(null);

  const [resultCoordiates, setResultCoordinates] = useState([
    { address: "address1", lat: 18.52043, lng: 73.856743 },
    { address: "address2", lat: 17.52043, lng: 73.856743 },
    { address: "address3", lat: 18.52043, lng: 70.856743 },
  ]);

  //options states
  const [searchActive, setSearchActive] = useState(false);

  const [zipCode, setZipCode] = useState("");
  const [withinMiles, setWithinMiles] = useState(5);

  const [showWithinOverlay, setShowWithinOverlay] = useState(false);

  const handleMarkerClickOrHover = (id, lat, lng, address, name, hours) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address, name, hours, lat, lng });
    setInfoWindowOpen(true);
  };

  const handleMarkerClickOrHoverOut = () => {
    setInfoWindowData({});
    setInfoWindowOpen(false);
  };

  useEffect(() => {
    gsap.fromTo(
      "#locationword",
      { opacity: 0, y: "-70%" },
      { opacity: 1, y: 0, duration: 1.2 }
    );
  }, []);

  useEffect(() => {
    if (!$("#uice").length || !$("#uicw".length)) return;

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
  }, [selectedSection]);

  const onLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    location?.forEach(({ coordinates }) =>
      bounds.extend({ lat: coordinates[0], lng: coordinates[1] })
    );
    map.fitBounds(bounds);
  };

  useEffect(() => {
    const section = params.section;
    setSelectedSection(section || null);
  }, [window.location.href]);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const one = document.getElementById("intersecting-locations1");
    const two = document.getElementById("intersecting-locations2");
    const three = document.getElementById("intersecting-locations3");

    if (!one) return;
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
  }, [selectedSection]);

  function handleSetWithinMiles(v) {
    setWithinMiles(v);
    setShowWithinOverlay(false);
  }

  const showWithin = useCallback(() => {
    console.log("rannn");
    setTimeout(() => {
      if ($(".location-inpsel").is(":hover")) {
        setShowWithinOverlay(true);
        //pseudo caret
        $("#within").removeClass("location-rot1");
        $("#within").addClass("location-rot2");
      }
    }, 300);
  }, [$(".location-inpsel")]);

  const showWithinMouseleave = useCallback(() => {
    setShowWithinOverlay(false);
    //pseduo caret
    $("#within").addClass("location-rot1");
    $("#within").removeClass("location-rot2");
  });

  useEffect(() => {
    if (!$(".location-inpsel").length) return;

    $(".location-inpsel").hover(showWithin, showWithinMouseleave);

    return () => $(".location-inpsel").off();
  }, [window.location.href, $(".location-inpsel")]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    gsap.fromTo("#outerlocation", { opacity: 0 }, { opacity: 1, duration: 3 });
  }, []);

  const footerHandle = useCallback(() => {
    const k = document
      .getElementById("footermain")
      .getBoundingClientRect().height;

    $("#container-locations").css("padding-bottom", `${k + 30}px`);
  }, []);

  useEffect(() => {
    const k = document
      .getElementById("footermain")
      .getBoundingClientRect().height;

    $("#container-locations").css("padding-bottom", `${k + 30}px`);

    window.addEventListener("resize", footerHandle);

    return () => {
      window.removeEventListener("resize", footerHandle);
    };
  });

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

      <div className='locations-e'>
        {!selectedSection && (
          <div>
            <div className='locations-b'>Select Region or Enter Zip Code!</div>

            <div className='locations-fil'>
              <input
                className='location-inp locations-w50'
                placeholder='Enter Zip Code'
              />
              <div
                className='location-inpsel locations-w50 location-rot1 location-mle'
                style={{
                  borderRadius: showWithinOverlay ? "4px 4px 0 0" : "4px",
                }}
                id='within'
              >
                Within {withinMiles} mi
                {showWithinOverlay && (
                  <div className='location-optcontainer'>
                    <div
                      className='location-opt'
                      onClick={() => handleSetWithinMiles(5)}
                    >
                      Within 5 mi
                    </div>

                    <div
                      className='location-opt'
                      onClick={() => handleSetWithinMiles(10)}
                    >
                      Within 10 mi
                    </div>

                    <div
                      className='location-opt'
                      onClick={() => handleSetWithinMiles(15)}
                    >
                      Within 15 mi
                    </div>

                    <div
                      className='location-opt'
                      onClick={() => handleSetWithinMiles(20)}
                    >
                      Within 20 mi
                    </div>

                    <div
                      className='location-opt'
                      onClick={() => handleSetWithinMiles(25)}
                      style={{
                        borderRadius: "0 0 4px 4px",
                        borderBottom: "none",
                      }}
                    >
                      Within 25 mi
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {!selectedSection && (
          <div className='locations-ep'>
            <div className='locations-querycontainer'>
              {searchActive
                ? ""
                : location.map((v, i) => (
                    <div
                      className='locations-querymap'
                      id={`querymap-${v.id}`}
                      onClick={() => {
                        handleMarkerClickOrHover(
                          i,
                          v.coordinates[0],
                          v.coordinates[1],
                          v.address,
                          v.name,
                          v.hours
                        );
                      }}
                    >
                      <div className='qre-title'>{v.name}</div>
                      <div className='qre-desc'>{v.address}</div>
                      <div className='qre-desc'>{v.hours}</div>
                      <a
                        className='qre-desc'
                        href={`https://www.google.com/maps/dir/?api=1&destination=${v.address}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Directions
                      </a>
                    </div>
                  ))}
            </div>
            {isLoaded && (
              <GoogleMap
                mapContainerClassName='gmap-container'
                zoom={10}
                onLoad={onLoad}
                options={{ mapTypeControl: false }}
              >
                {searchActive
                  ? resultCoordiates.length &&
                    resultCoordiates.map((v, i) => (
                      <Marker
                        position={{ lat: v.lat, lng: v.lng }}
                        onClick={() => {
                          handleMarkerClickOrHover(i, v.lat, v.lng, v.address);
                        }}
                        onMouseOver={() => {
                          handleMarkerClickOrHover(i, v.lat, v.lng, v.address);
                        }}
                        onMouseOut={() => {
                          handleMarkerClickOrHoverOut();
                        }}
                      >
                        {infoWindowOpen && infoWindowData?.id === i && (
                          <InfoWindow
                            onCloseClick={() => {
                              setInfoWindowOpen(false);
                            }}
                          >
                            <h3>{infoWindowData.address}</h3>
                          </InfoWindow>
                        )}
                      </Marker>
                    ))
                  : location.map((v, i) => (
                      <Marker
                        position={{
                          lat: v?.coordinates[0],
                          lng: v?.coordinates[1],
                        }}
                        icon={{
                          url: "/assets/machinenobg.jpeg",
                          scaledSize: new google.maps.Size(50, 50),
                        }}
                        onClick={() => {
                          handleMarkerClickOrHover(
                            i,
                            v.coordinates[0],
                            v.coordinates[1],
                            v.address,
                            v.name,
                            v.hours
                          );

                          //function to calculate total height above our desired element
                          function calculateTop() {
                            let result = 0;
                            location.forEach((t, i2) => {
                              if (i2 >= i) return;

                              const height = $(
                                `#querymap-${t.id}`
                              ).outerHeight();
                              console.log(t.id, height);
                              result += height;
                            });

                            return result;
                          }

                          //get total height of all elements above the one we want
                          const totalHeight = calculateTop();

                          //use javascript to scroll to that element, so the selected location shows on top
                          document
                            .querySelector(".locations-querycontainer")
                            .scrollTo({
                              top: totalHeight,
                            });
                        }}
                      >
                        {infoWindowOpen && infoWindowData?.id === i && (
                          <InfoWindow
                            onCloseClick={() => {
                              setInfoWindowOpen(false);
                            }}
                          >
                            <div className='infow-parent'>
                              <div className='infow-title'>
                                {infoWindowData.name}
                              </div>

                              <div className='infow-desc'>
                                {infoWindowData.address}
                              </div>

                              <div className='infow-desc'>
                                {infoWindowData.hours}
                              </div>
                              <a
                                className='infow-desc'
                                href={`https://www.google.com/maps/dir/?api=1&destination=${infoWindowData.address}`}
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                Directions
                              </a>
                            </div>
                          </InfoWindow>
                        )}
                      </Marker>
                    ))}
              </GoogleMap>
            )}
          </div>
        )}

        <div onClick={() => history("/locations/all")}>All Locations</div>

        {selectedSection === "all" && (
          <div className='container-locations' id='container-locations'>
            <div id='intersecting-locations1' />
            <div id='intersecting-locations2' />
            <div id='intersecting-locations3' />

            {location.map((location, i) => (
              <div
                className={`container-info ${
                  window.innerWidth > 700 ? "op0" : ""
                }`}
                id={location.id}
                key={location.id}
              >
                <div className='location-imgcontainer'>
                  <img
                    src={location.image}
                    alt='uiceast'
                    className='img-location'
                  />
                </div>
                <div className='location-fdsr'>
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
                      style={{
                        height: "45px",
                        width: "45px",
                        userSelect: "none",
                      }}
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
        )}
      </div>
      {/* <Background /> */}
    </div>
  );
};

export default MainLocations;
