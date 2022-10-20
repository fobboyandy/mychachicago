import React, { useEffect, useState } from "react";
import Background from "../../Background";
import "./menuitem.scss";
import { allItems } from "../menuobj";
import { useParams } from "react-router-dom";

const MenuItem = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const id = params.id;

    const item = allItems.find((item) => item.id === Number(id));
    setSelectedItem(item);
    setIsLoading(false);
  }, []);

  return (
    <div style={{ width: "100%" }} className="mitem-parent">
      <Background />
      <div className="mitem-container">
        <img src={selectedItem.image} />
        <div className="mitem-tableparent">
          <table className="table-head">
            <tr
              className="align-left"
              style={{ borderBottom: "4px solid #888" }}
            >
              <th className="tr-top">Serving Size</th>
              <th className="align-right tr-top">
                <span>{selectedItem.nutrition?.small?.serving_size}g</span>
              </th>
            </tr>
            <tr
              className="align-left"
              style={{ borderBottom: "4px solid #888" }}
            >
              <th className="tr-top ">
                Amount per serving
                <br />
                <span style={{ fontSize: "27px" }}>Calories</span>
              </th>
              <th className="align-right tr-top">
                <span style={{ fontSize: "27px" }}>
                  {selectedItem.nutrition?.small?.calories}
                </span>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
