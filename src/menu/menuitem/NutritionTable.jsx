import React from "react";

const NutritionTable = ({ selectedItem, smallNutrition, largeNutrition }) => {
  if (!smallNutrition?.total_fat[0]) {
  }
  return (
    <table className='table-head'>
      <tr className='align-left px4-888'>
        <th className='tr-top f500'>Serving Size</th>
        <th className='align-right tr-top f500'>
          <span>{selectedItem.nutrition?.small?.serving_size}g</span>
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
            {selectedItem.nutrition?.small?.calories}
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
          <span className='f500'>&nbsp;{smallNutrition?.total_fat[0]}g</span>
        </th>
        <th className='align-right tr-bot'>{smallNutrition?.total_fat[1]}%</th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp;&nbsp;&nbsp;Saturated &nbsp;
            {smallNutrition.saturated_fat[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'>
          {" "}
          {smallNutrition?.saturated_fat[1]}%
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp;&nbsp;&nbsp;Trans &nbsp;
            {smallNutrition.trans_fat}g
          </span>
        </th>
        <th className='align-right tr-bot'></th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          Sodium{" "}
          <span className='f500'>&nbsp;{smallNutrition?.sodium[0]}g</span>
        </th>
        <th className='align-right tr-bot'>{smallNutrition?.sodium[1]}%</th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          Carbohydrates{" "}
          <span className='f500'>
            &nbsp;{smallNutrition?.total_carbohydrate[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'>
          {smallNutrition?.total_carbohydrate[1]}%
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp; &nbsp;&nbsp;Fiber &nbsp;
            {smallNutrition?.dietary_fiber[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'>
          {" "}
          {smallNutrition?.dietary_fiber[1]}%
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp; &nbsp;&nbsp;Sugars &nbsp;
            {smallNutrition?.total_sugars}g
          </span>
        </th>
        <th className='align-right tr-bot'></th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp; &nbsp;&nbsp;Includes &nbsp;
            {smallNutrition?.added_sugars[0]}g Added
          </span>
        </th>
        <th className='align-right tr-bot'>
          {" "}
          {smallNutrition?.added_sugars[1]}%{" "}
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          Protein
          <span className='f500'>
            &nbsp;
            {smallNutrition?.protein[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'> {smallNutrition?.protein[1]}%</th>
      </tr>
    </table>
  );
};

export default NutritionTable;
