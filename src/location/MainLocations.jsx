import React, { useEffect, useCallback, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
  Autocomplete,
} from "@react-google-maps/api";

import axios from "axios";

import "./location.scss";
import "./gmap.scss";

import { location } from "./locationsobj";

import LocationWord from "../longstuff/LocationsWord";

import gsap from "gsap";
import $ from "jquery";

const libraries = ["places"];

//sklfhksdjfklsdjfklsd - inpsel2 fix mobile version where the borders are screwed up

const MainLocations = () => {
  const history = useNavigate();
  const params = useParams();

  const autoCompleteRef = useRef(null);
  const inputRef = useRef(null);

  const [allLocations, setAllLocations] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS,
    libraries: libraries,
  });

  //search = location search section, all = all locations section
  const [selectedSection, setSelectedSection] = useState("search");

  const [mapRef, setMapRef] = useState("");
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState(null);

  const [unfilteredResults, setUnfilteredResults] = useState([]);
  const [resultsFromQuery, setResultsFromQuery] = useState([]);
  const [queryLoading, setQueryLoading] = useState(false);

  //options states
  const [searchActive, setSearchActive] = useState(false);

  const [selectedCity, setSelectedCity] = useState(
    window.localStorage.getItem("city") || "Chicago"
  );

  const [selectedCityLocations, setSelectedCityLocations] = useState(
    location[
      selectedCity === "Chicago"
        ? "IL"
        : selectedCity === "Los Angeles"
        ? "CA"
        : ""
    ][
      selectedCity === "Chicago"
        ? "chicago"
        : selectedCity === "Los Angeles"
        ? "la"
        : ""
    ]
  );

  const [zipCode, setZipCode] = useState("");
  const [withinMiles, setWithinMiles] = useState(5);

  const [showWithinOverlay, setShowWithinOverlay] = useState(false);
  const [showCityOverlay, setShowCityOverlay] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  const onLoad = (map, locations) => {
    if (map) setMapRef(map);

    const bounds = new google.maps.LatLngBounds();
    locations
      ? locations?.forEach(({ coordinates }) =>
          bounds.extend({ lat: coordinates[0], lng: coordinates[1] })
        )
      : selectedCityLocations?.forEach(({ coordinates }) =>
          bounds.extend({ lat: coordinates[0], lng: coordinates[1] })
        );

    map ? map.fitBounds(bounds) : mapRef.fitBounds(bounds);
  };

  async function handlePlaceSearch() {
    //empty the query result array
    setInfoWindowOpen(false);
    setInfoWindowData(null);
    setResultsFromQuery([]);
    setUnfilteredResults([]);
    setQueryLoading(true);
    setSearchActive(true);

    const place = autoCompleteRef.current.getPlace();

    if (!place.address_components) {
      setQueryLoading(false);
      return;
    }

    let re = "";

    place.address_components.forEach((v) => (re = re + " " + v.short_name));

    //get the coordinates of the zipcode
    const zipReq = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${
        import.meta.env.VITE_MAPS
      }&address=${re}}`
    );

    //if the query is good
    if (zipReq.data.status === "OK" || zipReq.status === 200) {
      const center = zipReq.data.results[0].geometry.location;
      const state = zipReq.data.results[0].address_components.find(
        (v) => v.types.includes("administrative_area_level_1") //admin area level 1 = state
      ).short_name;

      if (!location[state]) {
        setQueryLoading(false);
        setResultsFromQuery([]);

        return;
      } //in a state we dont serve, handle this later

      const results = [];
      const t = new Promise((r) => {
        Object.keys(location[state]).forEach((v) => {
          //get all cities in a state
          const loc = location[state][v];

          //for each city, get the driving distance between the zip code and each location's coordinates
          const b = new Promise(async (resolve, reject) => {
            //need for loop, foreach gives inconsistient results with await.
            //literally ran the same query 5 times, gave me 3 different results with foreach. Lesson learned
            for (let i = 0; i < loc.length; i++) {
              await $.ajax({
                type: "GET",
                url: `/calculatedistance/${center.lat}/${center.lng}/${loc[i].coordinates[0]}/${loc[i].coordinates[1]}`,
              }).then((res) => {
                results.push({ ...loc[i], distance: res });
              });
            }

            resolve();
          });

          b.then(() => {
            r();
          });
        });
      });

      t.then(() => unfilteredHandle(results));
    }
  }

  function unfilteredHandle(results) {
    const final = [];
    setUnfilteredResults(results);

    const t = new Promise((resolve, reject) => {
      results.forEach((v, i, a) => {
        if (v.distance.miles <= withinMiles) {
          final.push(v);
        }

        if (i === a.length - 1) resolve();
      });
    });

    t.then(() => {
      if (final.length >= 1) {
        //if we have one or more results, move the map accordingly
        const bounds = new google.maps.LatLngBounds();
        final.forEach(({ coordinates }) =>
          bounds.extend({ lat: coordinates[0], lng: coordinates[1] })
        );
        mapRef.fitBounds(bounds);
      }

      setResultsFromQuery(
        final.sort(function (a, b) {
          if (a.distance.miles > b.distance.miles) {
            return 1;
          }
          if (a.distance.miles < b.distance.miles) {
            return -1;
          }
          return 0;
        })
      );

      setQueryLoading(false);
    }).catch(() => {
      setQueryLoading(false);
      alert("Something went wrong, please try again");
    });
  }

  //this function will reduce the # of api calls we make when a user selects a different within miles range
  function withinRecall(miles) {
    if (unfilteredResults.length < 1) return; // nothing to run with
    const result = [];

    unfilteredResults.forEach((v, i) => {
      if (v.distance.miles <= miles) {
        result.push(v);
      }

      if (i === unfilteredResults.length - 1) {
        if (result.length > 0) {
          //if we have one or more results, move the map accordingly
          const bounds = new google.maps.LatLngBounds();
          result.forEach(({ coordinates }) =>
            bounds.extend({ lat: coordinates[0], lng: coordinates[1] })
          );
          mapRef.fitBounds(bounds);
        }

        setResultsFromQuery(
          result.sort(function (a, b) {
            if (a.distance.miles > b.distance.miles) {
              return 1;
            }

            if (a.distance.miles < b.distance.miles) {
              return -1;
            }

            return 0;
          })
        );
      }
    });
  }

  const handleEnterAutoComplete = useCallback((e, t) => {
    e.stopPropagation();
    if (e.key === "Enter" && $("#input-query").is(":focus")) {
      const n = new KeyboardEvent("keydown", {
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
      });

      const r = new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
      });

      document.getElementById("input-query").dispatchEvent(n);
      document.getElementById("input-query").dispatchEvent(r);
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleEnterAutoComplete);
  }, []);

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
  }, []);

  const showCity = useCallback(() => {
    setTimeout(() => {
      if ($(".location-inpsel2").is(":hover")) {
        setShowCityOverlay(true);
        //pseudo caret
        $("#select-city").removeClass("location-rot1");
        $("#select-city").addClass("location-rot2");
      }
    }, 300);
  }, [$(".location-inpsel2")]);

  const showCityMouseLeave = useCallback(() => {
    setShowCityOverlay(false);
    //pseduo caret
    $("#select-city").addClass("location-rot1");
    $("#select-city").removeClass("location-rot2");
  }, []);

  const resize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  $(window).off("resize", window, resize).resize(resize);

  useEffect(() => {
    if (!$(".location-inpsel").length || !$(".location-inpsel2").length) return;

    $(".location-inpsel").hover(showWithin, showWithinMouseleave);
    $(".location-inpsel2").hover(showCity, showCityMouseLeave);

    return () => $(".location-inpsel").off();
  }, [window.location.href, $(".location-inpsel"), $(".location-inpsel2")]);

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

  //all locations
  useEffect(() => {
    const result = [];

    Object.keys(location).forEach((v) => {
      Object.keys(location[v]).forEach((t) => {
        result.push(...location[v][t]);
      });
    });

    setAllLocations(result);
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

      <div className='locations-e'>
        {!selectedSection && (
          <div>
            <div className='locations-b'>Select City or Enter Zip Code!</div>

            <div className='locations-fil'>
              <div className='locations-filq'>
                <div
                  className='location-inpsel2 locations-w502 location-rot1 location-mle'
                  style={{
                    borderRadius: showCityOverlay ? "4px 4px 0 0" : "4px",
                    marginLeft: 0,
                  }}
                  id='select-city'
                >
                  {selectedCity}
                  {showCityOverlay && (
                    <div className='location-optcontainer'>
                      <div
                        className='location-opt'
                        onClick={() => {
                          setSelectedCity("Chicago");
                          setSelectedCityLocations(location["IL"]["chicago"]);
                          window.localStorage.setItem("city", "Chicago");
                          setShowCityOverlay(false);
                          onLoad(null, location["IL"]["chicago"]);
                          setInfoWindowOpen(false);
                          setSearchActive(false);
                          mapRef.setZoom(11);
                        }}
                      >
                        Chicago
                      </div>

                      <div
                        className='location-opt'
                        onClick={() => {
                          setSelectedCity("Los Angeles");
                          setSelectedCityLocations(location["CA"]["la"]);
                          window.localStorage.setItem("city", "Los Angeles");
                          setShowCityOverlay(false);
                          onLoad(null, location["CA"]["la"]);
                          setInfoWindowOpen(false);
                          setSearchActive(false);
                        }}
                        style={{ borderRadius: "0 0 4px 4px" }}
                      >
                        Los Angeles
                      </div>
                    </div>
                  )}
                </div>

                <div className='locations-or'>OR</div>

                {isLoaded && (
                  <Autocomplete
                    onPlaceChanged={handlePlaceSearch}
                    options={{ fields: ["address_components"] }}
                    onLoad={(ref) => {
                      autoCompleteRef.current = ref;
                    }}
                  >
                    <input
                      className='location-inp locations-w502'
                      placeholder='Enter Zip Code'
                      type={"text"}
                      ref={inputRef}
                      id='input-query'
                    />
                  </Autocomplete>
                )}
              </div>

              {window.innerWidth > 750 ? (
                <div className='locations-divider' />
              ) : (
                <div className='locations-divider2' />
              )}

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
                      onClick={() => {
                        handleSetWithinMiles(5);
                        if (searchActive) {
                          withinRecall(5);
                        }
                      }}
                    >
                      Within 5 mi
                    </div>

                    <div
                      className='location-opt'
                      onClick={() => {
                        handleSetWithinMiles(10);
                        if (searchActive) {
                          withinRecall(10);
                        }
                      }}
                    >
                      Within 10 mi
                    </div>

                    <div
                      className='location-opt'
                      onClick={() => {
                        handleSetWithinMiles(15);
                        if (searchActive) {
                          withinRecall(15);
                        }
                      }}
                    >
                      Within 15 mi
                    </div>

                    <div
                      className='location-opt'
                      onClick={() => {
                        handleSetWithinMiles(20);
                        if (searchActive) {
                          withinRecall(20);
                        }
                      }}
                    >
                      Within 20 mi
                    </div>

                    <div
                      className='location-opt'
                      onClick={() => {
                        handleSetWithinMiles(25);
                        if (searchActive) {
                          withinRecall(25);
                        }
                      }}
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
                ? resultsFromQuery.length
                  ? resultsFromQuery.map((v, i) => (
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
                        <div className='qre-desc'>
                          Distance: {v.distance.miles} Miles
                        </div>

                        <a
                          className='qre-desc'
                          href={`https://www.google.com/maps/dir/?api=1&destination=${v.address}`}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Directions
                        </a>
                      </div>
                    ))
                  : !queryLoading && (
                      <div className='locations-oos'>
                        Sorry, seems like we don't sell near you. Try increasing
                        the within miles or follow us on{" "}
                        <a
                          href={"https://www.instagram.com/mychachicago/?hl=en"}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='locations-ihref'
                        >
                          Instagram
                        </a>{" "}
                        to be the first at our new locations!
                        <div
                          className='locations-reset'
                          onClick={() => $("#input-query").val("").focus()}
                        >
                          Reset Search
                        </div>
                      </div>
                    )
                : location[
                    selectedCity === "Chicago"
                      ? "IL"
                      : selectedCity === "Los Angeles"
                      ? "CA"
                      : ""
                  ][
                    selectedCity === "Chicago"
                      ? "chicago"
                      : selectedCity === "Los Angeles"
                      ? "la"
                      : ""
                  ]?.map((v, i) => (
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
                  ? resultsFromQuery.length &&
                    resultsFromQuery.map((v, i) => (
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
                            resultsFromQuery?.forEach((t, i2) => {
                              if (i2 >= i) return;

                              const height = $(
                                `#querymap-${t.id}`
                              ).outerHeight();
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
                                Hours: {infoWindowData.hours}
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
                    ))
                  : selectedCityLocations?.map((v, i) => (
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
                            selectedCityLocations?.forEach((t, i2) => {
                              if (i2 >= i) return;

                              const height = $(
                                `#querymap-${t.id}`
                              ).outerHeight();
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
                                Hours: {infoWindowData.hours}
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

            {allLocations?.map((location) => (
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
                    Hours: {location.hours !== "" ? ` ${location.hours}` : ""}
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

      {queryLoading && (
        <div
          className='lds-ring'
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,.3)",
            zIndex: 11,
            position: "fixed",
            top: 0,
          }}
          id='spinner-form'
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default MainLocations;
