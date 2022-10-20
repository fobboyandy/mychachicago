import React, { useEffect, useState } from "react";
import Background from "../../Background";
import "./menuitem.scss";
import { allItems } from "../menuobj";
import { useParams } from "react-router-dom";
import NutritionTable from "./NutritionTable";

const MenuItem = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [smallNutrition, setSmallNutrition] = useState({});
  const [largeNutrition, setLargeNutrition] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const id = params.id;

    const item = allItems.find((item) => item.id === Number(id));

    setSelectedItem(item);
    setSmallNutrition(item.nutrition.small);
    setLargeNutrition(item.nutrition.large);
    setIsLoading(false);
  }, []);

  if (isLoading) return "loading";

  return (
    <div style={{ width: "100%" }} className="mitem-parent">
      <Background />
      <div className="mitem-container">
        <img src={selectedItem.image} />
        <div className="mitem-tableparent">
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
  );
};

export default MenuItem;
