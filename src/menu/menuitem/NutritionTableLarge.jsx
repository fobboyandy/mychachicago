import React from "react";

const NutritionTableLarge = ({ selectedItem, largeNutrition }) => {
  return (
    <table className='table-head'>
      <tr className='align-left px4-888'>
        <th className='tr-top f500'>Serving Size</th>
        <th className='align-right tr-top f500'>
          <span>{selectedItem.nutrition?.large?.serving_size}g</span>
        </th>
      </tr>
      <tr className='align-left px4-888'>
        <th className='tr-top '>
          Amount per serving
          <br />
          <span style={{ fontSize: "27px" }}>Calories</span>
        </th>
        <th className='align-right tr-top'>
          <span style={{ fontSize: "27px" }}>
            {selectedItem.nutrition?.large?.calories}
          </span>
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th></th>
        <th className='align-right tr-bot'>% Daily Value</th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          Total Fat{" "}
          <span className='f500'>&nbsp;{largeNutrition?.total_fat[0]}g</span>
        </th>
        <th className='align-right tr-bot'>{largeNutrition?.total_fat[1]}%</th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp;&nbsp;&nbsp;Saturated &nbsp;
            {largeNutrition.saturated_fat[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'>
          {" "}
          {largeNutrition?.saturated_fat[1]}%
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp;&nbsp;&nbsp;Trans &nbsp;
            {largeNutrition.trans_fat}g
          </span>
        </th>
        <th className='align-right tr-bot'></th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          Sodium{" "}
          <span className='f500'>&nbsp;{largeNutrition?.sodium[0]}g</span>
        </th>
        <th className='align-right tr-bot'>{largeNutrition?.sodium[1]}%</th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          Carbohydrates{" "}
          <span className='f500'>
            &nbsp;{largeNutrition?.total_carbohydrate[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'>
          {largeNutrition?.total_carbohydrate[1]}%
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp; &nbsp;&nbsp;Fiber &nbsp;
            {largeNutrition?.dietary_fiber[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'>
          {" "}
          {largeNutrition?.dietary_fiber[1]}%
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp; &nbsp;&nbsp;Sugars &nbsp;
            {largeNutrition?.total_sugars}g
          </span>
        </th>
        <th className='align-right tr-bot'></th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp; &nbsp;&nbsp;Includes &nbsp;
            {largeNutrition?.added_sugars[0]}g Added
          </span>
        </th>
        <th className='align-right tr-bot'>
          {" "}
          {largeNutrition?.added_sugars[1]}%{" "}
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          Protein
          <span className='f500'>
            &nbsp;
            {largeNutrition?.protein[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'> {largeNutrition?.protein[1]}%</th>
      </tr>
    </table>
  );
};

export default NutritionTableLarge;
