import React, { useEffect, useState, useCallback } from "react";
import "./admin.scss";
import { location2 as location } from "../location/locationsobj";

import $ from "jquery";

import StockSlots from "./StockSlots";
import { allItems } from "../menu/menuobj";
import AdminCups from "./AdminCups";

//notes: columns goes from 1, 2, 3, 4, 5, 6
//rows is 0 index, goes 0, 1, 2, 3, 4, 5, 6

const Admin = () => {
  const [stock, setStock] = useState(
    Array(6).fill({
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
    })
  );
  const [selectedLocation, setSelectedLocation] = useState(location[0].id);
  //first number is row, second is column
  const [selectedCoordinates, setSelectedCoordinates] = useState([]);

  const [selectedDrink, setSelectedDrink] = useState(null);

  const [locationActive, setLocationActive] = useState(false);

  function set(num) {
    // if (num === 0) {
    //   num = "0";
    // }

    //means nothing selected
    if (!selectedCoordinates.length) return;

    const r = selectedCoordinates[0];
    const c = selectedCoordinates[1];
    const copy = stock.slice();

    copy[r] = { ...copy[r], [c]: num };
    setStock(copy);

    //end of the machine, dont go any further
    if (c === 7 && r === 5) {
      return;
    }

    if (c === 7) {
      setSelectedCoordinates([r + 1, 1]);
    } else {
      setSelectedCoordinates([r, c + 1]);
    }
  }

  const setMarginTop = useCallback(() => {
    const v = document.querySelector(".nav-home").getBoundingClientRect();

    $(".stock-parent").css("margin-top", v.height + 30 + "px");
  }, []);

  function handleSubmit() {
    const s = stock.slice().map((v) => Object.values(v));
    console.log(s);
  }

  useEffect(() => {
    $(document).ready(() => {
      const a = document
        .querySelector(".stock-location")
        .getBoundingClientRect();

      $(".stock-locationoverlay").css("top", a.top + a.height + 5 + "px");
      $(".stock-locationoverlay").css("left", a.left - $(this).width / 2);
    });
  }, []);

  useEffect(() => {
    setMarginTop();

    window.addEventListener("resize", setMarginTop);

    return () => window.removeEventListener("resize", setMarginTop);
  }, []);

  //testing purposes
  useEffect(() => {
    $.ajax({
      type: "GET",
      url: "/api/data",
    }).then((res) => {
      console.log(JSON.parse('{"result":true, "count":42}'));
      console.log(JSON.parse(res));
    });
  }, []);

  console.log(stock);

  return (
    <div>
      <div className='stock-parent'>
        <div
          className='stock-location'
          onClick={() => setLocationActive((prev) => !prev)}
          style={{ marginBottom: "20px" }}
        >
          {location.find((v) => v.id === selectedLocation).name}
        </div>
        <div className='stock-slots'>
          {stock.map((item, i) => (
            <StockSlots
              item={item}
              index={i}
              setSelectedCoordinates={setSelectedCoordinates}
              selectedCoordinates={selectedCoordinates}
            />
          ))}
        </div>

        <div
          className='stock-locationoverlay'
          style={{ display: !locationActive && "none" }}
        >
          {location.map((item, i) => (
            <div
              className='stock-li'
              onClick={() => {
                setSelectedLocation(item.id);
                setLocationActive(false);
              }}
              style={{
                borderRadius:
                  i === 0
                    ? "4px 4px 0 0"
                    : i === location.length - 1
                    ? "0 0 4px 4px"
                    : "",
              }}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className='stock-numpad'>
          <div className='s-numpad-li' onClick={() => set(0)}>
            0
          </div>
          <div className='s-numpad-li' onClick={() => set(1)}>
            1
          </div>
          <div className='s-numpad-li' onClick={() => set(2)}>
            2
          </div>
          <div className='s-numpad-li' onClick={() => set(3)}>
            3
          </div>
          <div
            className='s-numpad-li'
            onClick={() => set(4)}
            style={{ marginRight: 0 }}
          >
            4
          </div>
        </div>

        {/* <div className='stock-drinkselect'>
          {allItems.map((drink) => (
            <AdminCups
              drink={drink}
              selectedDrink={selectedDrink}
              setSelectedDrink={setSelectedDrink}
            />
          ))}
        </div> */}
      </div>

      <div className='stock-n'>
        <div className='stock-submit' onClick={() => handleSubmit()}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default Admin;
