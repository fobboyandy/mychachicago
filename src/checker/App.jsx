import React, { useEffect, useRef, useState } from "react";
import Machine from "./Machine";
import Boba from "./Boba";
import QtyOverlay from "./QtyOverlay";
import { arr } from "../longstuff/drinks";
import "./quantity.scss";
import $ from "jquery";

import { location, stock } from "../location/locationsobj";
import { allItems } from "../menu/menuobj";
import { useLocation, useParams } from "react-router-dom";
import Leaf from "../longstuff/Leaf";

const App = () => {
  const qtyRef = useRef(null);
  const states = useLocation();

  const [selected, setSelected] = useState({});
  const [drinkStock, setDrinkStock] = useState({});
  const [selected2, setSelected2] = useState("interactive");

  useEffect(() => {
    const obj = location.find((item) => item.id === states.state?.from);
    setSelected(obj || {});
    setDrinkStock(stock.find((item) => item.id === states.state?.from) || {});

    window.scrollTo({ top: 0 });
  }, []);

  if (!drinkStock.id && states.state?.from) {
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

  console.log(selected);
  return (
    <div className="quantity-container">
      <div className="quantity-locationcontainer">
        {/* <div className="quantity-imgcontainer">
          <img src={selected.image} style={{ width: "100%", height: "100%" }} />
        </div> */}
        <div className="location-name2">Mycha Location Stock Checker</div>
        <Leaf />
        <div className="location-name2">Choose a location below</div>
        <select
          onChange={(e) => {
            const v = location.find((loc) => loc.id === e.target.value);
            const st = stock.find((item) => item.id === e.target.value);
            setSelected(v);
            setDrinkStock(st);
          }}
          className="input-contact"
          style={{ width: "40%" }}
          value={selected.id}
        >
          <option disabled={selected.id}>Select One</option>
          {location.map((location) => (
            <option value={location.id}>{location.name}</option>
          ))}
        </select>
        <div className="quantity-information">
          <div className="location-name">{selected?.name}</div>
          <div className="location-desc">{selected?.address}</div>
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
              <img
                src="https://cdn.discordapp.com/attachments/779278654714675232/1030309176506855474/unknown.png"
                className="machine-img"
                alt="cup"
              />

              <div className="container-cups">
                {allItems.map((drink) => (
                  <div id={drink.id + "cupmap"}>
                    <div
                      style={{ position: "relative", zIndex: 1 }}
                      id={drink.id}
                      className="container-map"
                    >
                      <Boba drink={drink} />
                    </div>
                    <QtyOverlay drink={drink} stock={stock} />
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
