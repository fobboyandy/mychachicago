//stock checker main component

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import $ from "jquery";

import { locationWithoutState } from "../location/locationsobj";

import "./quantity.scss";

import Row from "./Row";
import Leaf from "../longstuff/Leaf";

const App = () => {
  const qtyRef = useRef(null);
  const states = useLocation();
  const params = useParams();

  const [loading, setLoading] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selected, setSelected] = useState({});

  const [drinkStock, setDrinkStock] = useState({});

  const [showSelectRegion, setShowSelectRegion] = useState(false);

  const [showSelect, setShowSelect] = useState(false);

  const [ready, setReady] = useState(true);

  const [drinks, setDrinks] = useState([]);

  async function handleChange(id, region) {
    setLoading(true);
    const v = locationWithoutState[region || selectedRegion].find(
      (loc) => loc.id === id
    );

    await $.ajax({
      type: "GET",
      url: `/getstockforalocation/${v?.fetchName}`,
    })
      .then((res) => {
        console.log(res, "response");
        console.log(res === "", "res equals empty string");
        console.log(!res, "exclaim res");
        console.log(typeof res, "typeof response");
        if (res === "not found" || !res || !res.length || res === "") {
          setDrinks([]);
          return;
        }
        setDrinks(res);

        // const result = {};

        // res.forEach((v, p) => {
        //   v.forEach((t, i) => {
        //     result[res[p][i][0]] ||= 0;
        //     result[res[p][i][0]] += res[p][i][1];
        //   });
        // });

        setSelected(v);
        setDrinkStock([]);
        setLoading(false);
      })
      .catch(() => {
        alert("Something went wrong, please try again");
      });
  }

  // useEffect(() => {
  //   const obj = location["IL"]["chicago"].find(
  //     (item) => item.id === states.state?.from
  //   );
  //   setSelected(obj || {});
  //   setDrinkStock(stock.find((item) => item.id === states.state?.from) || {});

  //   window.scrollTo({ top: 0 });
  // }, [states.state?.from]);

  // useEffect(() => {
  //   async function f() {
  //     const loc = await $.ajax({
  //       url: "/fetchlocations",
  //     }).then((res) => {
  //       console.log(res);
  //     });
  //   }

  //   f();
  // }, []);

  useEffect(() => {
    const loc = params.location;
    const regions = Object.keys(locationWithoutState);

    for (let i = 0; i < regions.length; i++) {
      const find = locationWithoutState[regions[i]]?.find((v) => v.id === loc);

      if (find) {
        setSelectedRegion(regions[i]);
        handleChange(loc, regions[i]);
        break;
      }
    }
  }, []);

  //handle inspect element resizing
  const resize = useCallback(() => {
    const f =
      document.getElementsByClassName("select-container3")[0]?.offsetHeight;
    let count2 = f;

    $(".li-contact").each((index, element) => {
      element.style.top = count2 + "px";
      count2 += element.offsetHeight;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const hoverRegion = useCallback(() => {
    setTimeout(() => {
      if ($("#select-region").is(":hover")) {
        setShowSelectRegion(true);
      }
    }, 300);
  }, []);

  const hoverOutRegion = useCallback(() => {
    setShowSelectRegion(false);
  }, []);

  const hoverLocation = useCallback(() => {
    setTimeout(() => {
      if ($("#select-location").is(":hover")) {
        setShowSelect(true);
      }
    }, 300);
  }, []);

  const hoverOutLocation = useCallback(() => {
    setShowSelect(false);
  }, []);

  useEffect(() => {
    $(document).ready(() => {
      $("#select-region").hover(hoverRegion, hoverOutRegion);
    });

    return () => {
      //remove listeners
      $("#select-location").off();
      $("#select-region").off();
    };
  }, []);

  useEffect(() => {
    $("#select-location").hover(hoverLocation, hoverOutLocation);
  }, [$("#select-location")]);

  if (!drinkStock?.id && states.state?.from) {
    //drinkstock.id without ? threw an error once, i couldnt reproduce. I will keep the ? just in case
    return (
      <div
        className='lds-ring'
        style={{
          width: "100%",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        id='spinner-form'
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div className='quantity-container'>
      <div className='quantity-locationcontainer'>
        <div className='location-name2'>Mycha Location Stock Checker</div>
        <Leaf />
        <div className='location-name2' style={{ marginBottom: "15px" }}>
          Choose a location below
        </div>

        <div
          className='select-container3'
          id='select-region'
          style={{ zIndex: 12 }}
        >
          <div className='select-contact2' id='select-region'>
            {(selectedRegion &&
              Object.keys(locationWithoutState)
                .find((v) => v === selectedRegion)
                .toUpperCase()) ||
              "Select a Region"}
          </div>

          {showSelectRegion && (
            <div
              className='select-mapparent'
              style={{ top: $("#select-region").outerHeight() }}
            >
              {Object.keys(locationWithoutState).map((region, i, o) => (
                <div
                  className='li-contact'
                  onClick={() => {
                    setSelectedRegion(region);
                    setShowSelectRegion(false);
                  }}
                  style={{
                    display: showSelectRegion ? "" : "none",
                    borderRadius: i === o.length - 1 && "0 0 4px 4px",
                  }}
                  key={region}
                >
                  {region.toUpperCase()}
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedRegion && (
          <div
            className='select-container3'
            id='select-location'
            style={{ marginTop: "40px" }}
          >
            <div className='select-contact2' id='select-location'>
              {locationWithoutState[selectedRegion].find(
                (item) => item.id === selected.id
              )?.name || "Select a location"}
            </div>
            {showSelect && (
              <div
                className='select-mapparent'
                style={{ top: $("#select-location").outerHeight() }}
              >
                {locationWithoutState[selectedRegion]?.map((location, i, o) => (
                  <div
                    className='li-contact'
                    onClick={() => {
                      handleChange(location.id);
                      setShowSelect(false);
                    }}
                    id={location.id}
                    style={{
                      display: showSelect ? "" : "none",
                      borderRadius: i === o.length - 1 && "0 0 4px 4px",
                    }}
                    key={location.id}
                  >
                    {location.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {selected?.id && <div className='app-divider' />}
        {selected?.id && (
          <div className='quantity-information'>
            <div className='location-name'>{selected?.name}</div>
            <div className='location-desc' style={{ marginBottom: "15px" }}>
              {selected?.address}
            </div>
            <div>Hours: {selected?.hours}</div>
            <div>{selected?.desc}</div>
          </div>
        )}
      </div>

      {selected.id ? (
        <div
          style={{
            width: "100%",
            minWidth: "350px",
          }}
        >
          <div className='quantity-slider' ref={qtyRef}>
            <div className='machine-container '>
              <img
                src='/assets/machinestuff/machineimage.jpeg'
                className='machine-imgmain'
                alt='cup'
              />

              <div className='container-cups'>
                {drinks?.length &&
                  drinks?.map((drink, i) => (
                    <div className='container-row'>
                      {drink?.map((t, q) => (
                        <Row selected={t} col={i} row={q} />
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {loading && (
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

export default App;
