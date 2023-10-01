import React, { useState } from "react";
import { useSelector } from "react-redux";

import Leaf from "../../longstuff/Leaf";

const SelectRegion = ({
  setSelectedRegion,
  selectedRegion,
  setHoldRegion,
  holdRegion,
  handleSetRegion,
}) => {
  const regions = useSelector((state) => state.locations);

  const [show, setShow] = useState(false);

  return (
    <div className="sr-parent">
      <div className="sr-inner">
        <div className="sr-f">
          Welcome to Mycha Catering. Please select a region.
        </div>

        <Leaf />

        <div className="select-container3" style={{ alignItems: "center" }}>
          <div
            className="select-contact2"
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            {holdRegion ? holdRegion?.name : "Select a region"}
          </div>

          {show && (
            <div className="sr-regioncon">
              {regions?.map((re) => (
                <div
                  className="sr-regionsel"
                  onClick={() => {
                    setHoldRegion(re);
                    setShow(false);
                  }}
                >
                  {re?.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="sr-confirm" onClick={() => handleSetRegion()}>
          Confirm
        </div>
      </div>
    </div>
  );
};

export default SelectRegion;
