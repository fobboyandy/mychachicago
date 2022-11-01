import React, { useEffect, useRef, useState } from "react";
import Background from "../../Background";
import "./menuitem.scss";
import { allItems } from "../menuobj";
import { useParams } from "react-router-dom";
import NutritionTable from "./NutritionTable";
import NotFound from "../../NotFound";

const MenuItem = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [smallNutrition, setSmallNutrition] = useState({});
  const [largeNutrition, setLargeNutrition] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [smallOrLarge, setSmallOrLarge] = useState("small");

  const params = useParams();

  const containerRef = useRef(null);

  function leftScroll() {
    containerRef.current.scrollLeft += 1000;
  }

  function rightScroll() {
    containerRef.current.scrollLeft -= 1000;
  }

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
    <div style={{ width: "100%" }} className="mitem-parent">
      {/* <Background /> */}
      <div className="mitem-container">
        <div className="mitem-imgcontainer">
          <img src={selectedItem.image} className="mitem-img" />
        </div>
        <div className="mitem-tableouter">
          <div className="mitem-head">{selectedItem.name}</div>
          <div className="mitem-select">
            <div
              className="mitem-selectchild"
              style={{
                borderBottom: smallOrLarge === "small" ? "2px solid #888" : "",
              }}
              onClick={() => {
                setSmallOrLarge("small");
                rightScroll();
              }}
            >
              Small
            </div>
            <div
              className="mitem-selectchild"
              onClick={() => {
                setSmallOrLarge("large");
                leftScroll();
              }}
              style={{
                borderBottom: smallOrLarge === "large" ? "2px solid #888" : "",
              }}
            >
              Large
            </div>
          </div>
          <div className="mitem-tableparent" ref={containerRef}>
            <NutritionTable
              selectedItem={selectedItem}
              smallNutrition={smallNutrition}
              largeNutrition={largeNutrition}
              isLoading={isLoading}
            />

            <NutritionTable
              selectedItem={selectedItem}
              smallNutrition={smallNutrition}
              largeNutrition={largeNutrition}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
