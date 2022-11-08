//stock checker main component

import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import $ from "jquery";
import gsap from "gsap";

import { location, stock } from "../location/locationsobj";
import { allItems } from "../menu/menuobj";

import "./quantity.scss";

import Boba from "./Boba";
import QtyOverlay from "./QtyOverlay";
import Leaf from "../longstuff/Leaf";

const App = () => {
  const qtyRef = useRef(null);
  const states = useLocation();

  const [selected, setSelected] = useState({});
  const [drinkStock, setDrinkStock] = useState({});

  const [showSelect, setShowSelect] = useState(false);

  const [ready, setReady] = useState(true);

  function handleChange(id) {
    const v = location.find((loc) => loc.id === id);
    const st = stock.find((item) => item.id === id);
    setSelected(v);
    setDrinkStock(st);
  }

  function optionSlideIn1() {
    if (!ready) return;
    setReady(false);
    setTimeout(() => {
      setReady(true);
    }, 1500);

    setShowSelect(true);
    let delay = 0;
    location.forEach((loca) => {
      gsap.fromTo(
        `#${loca.id}`,
        { opacity: 0, y: "-100%" },
        { opacity: 1, y: 0, duration: 0.15, delay: delay }
      );

      delay += 0.1;
    });

    setTimeout(() => {}, location.length * 0.1 + 200);
  }

  function optionSlideOut() {
    if (!ready) return;
    setReady(false);
    setTimeout(() => {
      setReady(true);
    }, 1500);
    let delay = location.length * 0.1;

    setTimeout(() => {
      setShowSelect(false);
    }, delay * 1000 + 260);

    location.forEach((loca) => {
      gsap.fromTo(
        `#${loca.id}`,
        { opacity: 1, y: 0 },
        { opacity: 0, y: "-100%", duration: 0.2, delay: delay }
      );

      delay -= 0.1;
    });
  }

  useEffect(() => {
    const obj = location.find((item) => item.id === states.state?.from);
    setSelected(obj || {});
    setDrinkStock(stock.find((item) => item.id === states.state?.from) || {});

    window.scrollTo({ top: 0 });
  }, [states.state?.from]);

  useEffect(() => {
    const f =
      document.getElementsByClassName("select-container3")[0]?.offsetHeight;
    let count2 = f;

    $(".li-contact").each((index, element) => {
      element.style.top = count2 * (index + 1) + "px";
      element.style.opacity = 0;
    });
  }, [showSelect]);

  useEffect(() => {}, [showSelect, ready]);

  let isAnimating = false;

  $(document).click(function (event) {
    if (isAnimating) {
      return;
    }
    var $target = $(event.target);
    if (
      !$target.closest(".select-container3").length &&
      $(".select-container3").is(":visible")
    ) {
      isAnimating = true;
      if (!ready) return;
      setTimeout(() => {
        setReady(false);
      }, 1200);
      if (showSelect && ready) {
        optionSlideOut();

        setTimeout(() => {
          isAnimating = false;
        }, 1500);
      }
    }
  });

  console.log(ready);

  if (!drinkStock?.id && states.state?.from) {
    //drinkstock.id without ? threw an error once, i couldnt reproduce. I will keep the ? just in case
    return (
      <div
        className="lds-ring"
        style={{
          width: "100%",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="spinner-form"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="quantity-container">
      <div className="quantity-locationcontainer">
        <div className="location-name2">Mycha Location Stock Checker</div>
        <Leaf />
        <div className="location-name2" style={{ marginBottom: "15px" }}>
          Choose a location below
        </div>

        <div
          className="select-container3"
          onClick={() => {
            if (!ready) return;
            showSelect ? optionSlideOut() : optionSlideIn1();
          }}
          style={{ zIndex: 9, pointerEvents: ready ? "" : "none" }}
        >
          <div className="select-contact2">
            {location.find((item) => item.id === selected.id)?.name ||
              "Select a location"}
          </div>
          {location.map((location) => (
            <div
              className="li-contact op0"
              onClick={() => handleChange(location.id)}
              id={location.id}
              style={{ display: showSelect ? "" : "none" }}
              key={location.id}
            >
              {location.name}
            </div>
          ))}
        </div>
        <div className="quantity-information">
          <div className="location-name">{selected?.name}</div>
          <div className="location-desc" style={{ marginBottom: "15px" }}>
            {selected?.address}
          </div>
          <div>{selected?.hours}</div>
          <div>{selected?.desc}</div>
        </div>
      </div>

      {selected.id ? (
        <div
          style={{
            width: "100%",
            minWidth: "350px",
          }}
        >
          <div className="quantity-slider" ref={qtyRef}>
            <div className="machine-container ">
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
                className="hoverorclick"
              >
                Hover or Click each drink to see stock!
              </div>
              <img
                src="https://cdn.discordapp.com/attachments/779278654714675232/1030309176506855474/unknown.png"
                className="machine-img"
                alt="cup"
              />

              <div className="container-cups">
                {allItems.map((drink) => (
                  <div id={drink.id + "cupmap"} key={drink.id}>
                    <div
                      style={{ position: "relative", zIndex: 1 }}
                      id={drink.id}
                      className="container-map"
                    >
                      <Boba drink={drink} />
                    </div>
                    <QtyOverlay drink={drink} stock={drinkStock} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
