import React, { useEffect, useRef, useState } from "react";
import "./menuitem.scss";
import { allItems } from "../menuobj";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NutritionTable from "./NutritionTable";
import NotFound from "../../NotFound";

import $ from "jquery";
import NutritionTableLarge from "./NutritionTableLarge";

const MenuItem = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [smallNutrition, setSmallNutrition] = useState({});
  const [largeNutrition, setLargeNutrition] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [smallOrLarge, setSmallOrLarge] = useState("small");

  const [v, setV] = useState("");

  const params = useParams();
  const history = useNavigate();
  const location = useLocation();

  const containerRef = useRef(null);

  function leftScroll() {
    containerRef.current.scrollLeft += 500;
    setSmallOrLarge("large");
  }

  function rightScroll() {
    containerRef.current.scrollLeft -= 1000;
    setSmallOrLarge("small");
  }

  useEffect(() => {
    $(document).ready(() => {
      const v = document.getElementById("tableparent");
      setV(v);
    });
  }, []);

  useEffect(() => {
    if (v === "") return;

    let isDown = false;
    let startX;
    let scrollLeft;

    function vMouseMove(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - v.scrollLeft;

      const walk = x - startX;

      v.scrollLeft = scrollLeft - walk;

      setTimeout(() => {
        if (v.scrollLeft > v.offsetWidth / 2) {
          setSmallOrLarge("large");
        } else {
          setSmallOrLarge("small");
        }
      }, 500);
    }

    function handleMouseDown(e) {
      isDown = true;
      startX = e.pageX - v.scrollLeft;
      scrollLeft = v.scrollLeft;
    }

    function isDownFalse() {
      isDown = false;
    }

    $(document).ready(() => {
      v?.addEventListener("mousedown", handleMouseDown);

      v?.addEventListener("mouseup", isDownFalse);

      v?.addEventListener("mouseleave", isDownFalse);

      v?.addEventListener("mousemove", vMouseMove);
    });

    return () => {
      v?.removeEventListener("mousemove", vMouseMove);
      v?.removeEventListener("mouseup", isDownFalse);
      v?.removeEventListener("mouseleave", isDownFalse);
      v?.removeEventListener("mousedown", handleMouseDown);
    };
  }, [v]);

  useEffect(() => {
    const id = params.id;

    const item = allItems.find((item) => item.id === Number(id));

    setSelectedItem(item);
    setSmallNutrition(item?.nutrition.small);
    setLargeNutrition(item?.nutrition.large);
    setIsLoading(false);
  }, []);

  if (isLoading) return "loading";

  if (!isLoading && !selectedItem?.id) {
    return <NotFound />;
  }

  return (
    <div>
      <div style={{ width: "100%" }} className='mitem-parent'>
        {/* <Background /> */}
        <div className='mitem-container'>
          <div className='mitem-imgcontainer'>
            <img src={selectedItem.image} className='mitem-img' alt='cup' />
          </div>
          <div className='mitem-tableouter'>
            <div className='mitem-head'>{selectedItem.name}</div>
            <div className='mitem-select'>
              <div
                className='mitem-selectchild'
                style={{
                  borderBottom:
                    smallOrLarge === "small" ? "2px solid #888" : "",
                }}
                onClick={() => {
                  rightScroll();
                }}
              >
                Small
              </div>
              <div
                className='mitem-selectchild'
                onClick={() => {
                  leftScroll();
                }}
                style={{
                  borderBottom:
                    smallOrLarge === "large" ? "2px solid #888" : "",
                }}
              >
                Large
              </div>
            </div>
            <div
              className='mitem-tableparent'
              ref={containerRef}
              id='tableparent'
            >
              <NutritionTable
                selectedItem={selectedItem}
                smallNutrition={smallNutrition}
                isLoading={isLoading}
              />

              <NutritionTableLarge
                selectedItem={selectedItem}
                largeNutrition={largeNutrition}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          position: "relative",
          height: "50px",
          paddingBottom: "10vh",
        }}
      >
        <div
          className='checkstock-button'
          onClick={() => history("/locations/check")}
        >
          Check Stock
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
