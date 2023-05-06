import React, { useEffect, useState, useCallback } from "react";
import "./admin.scss";
import { location2 as location } from "../location/locationsobj";

import $ from "jquery";

import StockSlots from "./StockSlots";

//notes: columns goes from 1, 2, 3, 4, 5, 6
//rows is 0 index, goes 0, 1, 2, 3, 4, 5, 6

const Admin = () => {
  const [stock, setStock] = useState(
    Array(6).fill({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    })
  );
  //first number is row, second is column
  const [selectedCoordinates, setSelectedCoordinates] = useState([0, 1]);

  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState();

  const [locationActive, setLocationActive] = useState(false);

  const [loading, setLoading] = useState(false);

  const [lastUpdated, setLastUpdated] = useState("");

  const [editingTime, setEditingTime] = useState(false);
  const [overwriteTimeValue, setOverwriteTimeValue] = useState(null);

  function set(num) {
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

  async function handleSubmit() {
    const s = stock.slice().map((v) => Object.values(v));

    setLoading(true);

    $.ajax({
      type: "POST",
      url: "/sendstock",
      data: {
        data: JSON.stringify(s),
        location: JSON.stringify(selectedLocation),
        time: overwriteTimeValue ? overwriteTimeValue / 1000 : null,
      },
    }).then((res) => {
      if (res.status === "success") {
        const date = new Date(res.time * 1000).toLocaleString("en-US", {
          timeZone: "America/Chicago",
        });

        setLastUpdated(date);
        setLoading(false);
        setEditingTime(false);
        setOverwriteTimeValue(null);
        alert("successfully updated stock");
      }
    });
  }

  async function handleFetch() {
    setLoading(true);

    $.ajax({
      type: "GET",
      url: `/fetchstock/${selectedLocation}`,
    }).then((res) => {
      const result = [];

      if (res.time) {
        const date = new Date(res.time * 1000).toLocaleString("en-US", {
          timeZone: "America/Chicago",
        });

        setLastUpdated(date);
      } else {
        setLastUpdated("none");
      }

      if (res.stock) {
        res.stock.forEach((t) => {
          const inner = {};
          t.forEach((p, i) => {
            inner[i + 1] = p;
          });

          result.push(inner);
          setStock(result);
        });
      } else {
        setStock(
          Array(6).fill({
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
          })
        );
      }

      setLoading(false);
    });
  }

  const setOverlayLocation = useCallback(() => {
    const a = document.querySelector(".stock-location").getBoundingClientRect();

    $(".stock-locationoverlay").css("top", a.top + a.height + 5 + "px");
    $(".stock-locationoverlay").css("left", a.left - $(this).width / 2);
  }, []);

  const clickout = useCallback(() => {
    var $target = $(event.target);

    if (
      !$target.closest(".stock-location").length &&
      !$target.closest(".stock-locationoverlay").length &&
      $(".stock-locationoverlay").is(":visible")
    ) {
      setLocationActive(false);
    }
  }, []);

  $(document).off("click", document, clickout).click(clickout);

  useEffect(() => {
    $(document).ready(() => {
      setOverlayLocation();
    });

    window.addEventListener("resize", setOverlayLocation);

    return () => window.removeEventListener("resize", setOverlayLocation);
  }, [locations]);

  useEffect(() => {
    setMarginTop();

    window.addEventListener("resize", setMarginTop);

    return () => window.removeEventListener("resize", setMarginTop);
  }, []);

  useEffect(() => {
    if (!locations?.length) return;
    handleFetch();
  }, [selectedLocation]);

  useEffect(() => {
    $.ajax({
      type: "GET",
      url: `/fetchlocations`,
    }).then((res) => {
      setLocations(res);
      setSelectedLocation(res[0].replace(/ /g, "").replace(/[()]/g, ""));
    });
  }, []);

  return (
    <div>
      <div className='stock-parent'>
        <div
          className='stock-location'
          onClick={() => setLocationActive((prev) => !prev)}
          style={{ marginBottom: "20px" }}
        >
          {locations.find(
            (v) => v.replace(/ /g, "").replace(/[()]/g, "") === selectedLocation
          )}
        </div>

        <div className='last-set'>Last Updated: {lastUpdated}</div>
        {!editingTime && (
          <div className='stock-overwrite' onClick={() => setEditingTime(true)}>
            Overwrite
          </div>
        )}

        {editingTime && (
          <div className='stock-sd'>
            <input
              type='datetime-local'
              className='stock-overwriteinput'
              onChange={(e) =>
                setOverwriteTimeValue(new Date(e.target.value).getTime())
              }
            />
            <div className='stock-con'>
              <span
                className='stock-submittime stock-cancel'
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </span>
              <span
                className='stock-cancel'
                onClick={() => {
                  setEditingTime(false);
                  setOverwriteTimeValue(null);
                }}
              >
                Cancel
              </span>
            </div>
          </div>
        )}

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
          {locations?.map((item, i) => (
            <div
              className='stock-li'
              onClick={() => {
                setSelectedLocation(
                  item.replace(/ /g, "").replace(/[()]/g, "")
                );
                setLocationActive(false);
              }}
              style={{
                borderRadius:
                  i === 0
                    ? "4px 4px 0 0"
                    : i === locations.length - 1
                    ? "0 0 4px 4px"
                    : "",
              }}
            >
              {item}
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

      {loading && (
        <div className='load-parent' style={{ display: !loading && "none" }}>
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
        </div>
      )}
    </div>
  );
};

export default Admin;
