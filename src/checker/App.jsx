//stock checker main component

import React, { useCallback, useEffect, useRef, useState } from "react";
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

  const [lastClicked, setLastClicked] = useState("");
  const [lastClicked2, setLastClicked2] = useState("");

  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  function handleChange(id) {
    const v = location["IL"]["chicago"].find((loc) => loc.id === id);
    const st = stock.find((item) => item.id === id);
    setSelected(v);
    setDrinkStock(st);
  }

  function optionSlideIn1() {
    //prevent spamming
    if (new Date().getTime() - lastClicked < 700) {
      setLastClicked(new Date().getTime());
      return;
    }
    if (!ready) return;
    setLastClicked(new Date().getTime());

    setShowSelect(true);
    let delay = 0;
    tl2.progress(1);

    if (!tl2.isActive()) {
      location["IL"]["chicago"].forEach((loca) => {
        tl2.fromTo(
          `#${loca.id}`,
          { opacity: 0, y: "-100%" },
          { opacity: 1, y: 0, duration: 0.05, delay: delay }
        );

        delay += 0.009;
      });
    }

    setTimeout(() => {}, location.length * 0.1 + 200);
  }

  function optionSlideOut() {
    if (new Date().getTime() - lastClicked2 < 700) {
      setLastClicked2(new Date().getTime());
      return;
    }

    if (!ready) return;
    setReady(false);
    setLastClicked2(new Date().getTime());
    tl.progress(1);

    let delay = 0;
    if (!tl.isActive()) {
      location["IL"]["chicago"]
        .slice()
        .reverse()
        .forEach((loca, i) => {
          tl.fromTo(
            `#${loca.id}`,
            { opacity: 1, y: 0 },
            {
              opacity: 0,
              y: "-100%",
              duration: 0.1,
              delay: delay,
              onComplete: !location[i - 1]
                ? () => {
                    setTimeout(() => {
                      setShowSelect(false);
                      setReady(true);
                    }, 1000);
                  }
                : "",
            }
          );
          delay += 0.01;
        });
    }
  }

  useEffect(() => {
    const obj = location["IL"]["chicago"].find(
      (item) => item.id === states.state?.from
    );
    setSelected(obj || {});
    setDrinkStock(stock.find((item) => item.id === states.state?.from) || {});

    window.scrollTo({ top: 0 });
  }, [states.state?.from]);

  useEffect(() => {
    const f =
      document.getElementsByClassName("select-container3")[0]?.offsetHeight;
    let count2 = f;

    $(".li-contact").each((index, element) => {
      element.style.top = count2 + "px";
      element.style.opacity = 0;
      count2 += element.offsetHeight;
    });
  }, [showSelect]);

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

  //click outside of select when it is visible, we close it
  $(document).click(function (event) {
    var $target = $(event.target);
    if (
      !$target.closest(".select-container3").length &&
      $(".select-container3").is(":visible")
    ) {
      if (showSelect) {
        optionSlideOut();
      }
    }
  });

  useEffect(() => {
    $.ajax({
      type: "GET",
      url: "/remainingstock",
    }).then((res) => {
      console.log(res);
      console.log(JSON.parse(res));
    });
  }, []);

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
          onClick={() => {
            showSelect ? optionSlideOut() : optionSlideIn1();
          }}
        >
          <div className='select-contact2'>
            {location["IL"]["chicago"].find((item) => item.id === selected.id)
              ?.name || "Select a location"}
          </div>
          {location["IL"]["chicago"].map((location) => (
            <div
              className='li-contact op0'
              onClick={() => handleChange(location.id)}
              id={location.id}
              style={{ display: showSelect ? "" : "none" }}
              key={location.id}
            >
              {location.name}
            </div>
          ))}
        </div>
        <div className='quantity-information'>
          <div className='location-name'>{selected?.name}</div>
          <div className='location-desc' style={{ marginBottom: "15px" }}>
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
          <div className='quantity-slider' ref={qtyRef}>
            <div className='machine-container '>
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
                className='hoverorclick'
              >
                Hover or Click each drink to see stock!
              </div>
              <img
                src='../assets/machinestuff/machineimage.png'
                className='machine-img'
                alt='cup'
              />

              <div className='container-cups'>
                {allItems.map((drink) => (
                  <div id={drink.id + "cupmap"} key={drink.id}>
                    <div
                      style={{ position: "relative", zIndex: 1 }}
                      id={drink.id}
                      className='container-map'
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
