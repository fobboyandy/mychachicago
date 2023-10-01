import React, { useEffect, useState } from "react";

import "./shop.scss";

import { useDispatch, useSelector } from "react-redux";
import { dispatchSetLocations } from "../../store/locations";

//use older version of jquery
import $ from "jquery";

import SelectRegion from "./SelectRegion";

const Shop = () => {
  const dispatch = useDispatch();

  const navheight = useSelector((state) => state.navheight);
  const regions = useSelector((state) => state.locations);

  //hold before submit
  const [holdRegion, setHoldRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(
    window.localStorage.getItem("cateringregion") || null
  );

  const [loading, setLoading] = useState(true);

  async function handleSetRegion() {
    window.localStorage.setItem("cateringregion", holdRegion.id);
    setSelectedRegion(holdRegion);
  }

  //fetch locations
  useEffect(() => {
    $.ajax({
      url: "/fetchallregions",
      type: "GET",
    })
      .then((res) => {
        dispatch(dispatchSetLocations(res));
        setLoading(false);
      })
      .catch(() => {
        alert("Something went wrong, please try again");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="abs-loading">
        <div className="lds-ring" id="spinner-form">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  return (
    <div className="shop-parent" style={{ marginTop: navheight + "px" }}>
      {!selectedRegion && (
        <SelectRegion
          setSelectedRegion={setSelectedRegion}
          setHoldRegion={setHoldRegion}
          holdRegion={holdRegion}
          selectedRegion={selectedRegion}
          handleSetRegion={handleSetRegion}
        />
      )}
    </div>
  );
};

export default Shop;
