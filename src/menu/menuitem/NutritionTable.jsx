import React from "react";

const NutritionTable = ({ nutrition, index }) => {
  console.log($(`#tablehead-${index}`).position()?.left);
  return (
    <table className='table-head' id={`tablehead-${index}`}>
      <tr className='align-left px4-888'>
        <th className='tr-top f500'>Serving Size</th>
        <th className='align-right tr-top f500'>
          <span>{nutrition.nutrition.serving_size}g</span>
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
            {nutrition.nutrition.calories}
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
          <span className='f500'>
            &nbsp;{nutrition.nutrition.total_fat[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'>
          {nutrition.nutrition.total_fat[1]}%
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp;&nbsp;&nbsp;Saturated &nbsp;
            {nutrition.nutrition.saturated_fat[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'>
          {" "}
          {nutrition.nutrition.saturated_fat[1]}%
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp;&nbsp;&nbsp;Trans &nbsp;
            {nutrition.nutrition.trans_fat}g
          </span>
        </th>
        <th className='align-right tr-bot'></th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          Sodium{" "}
          <span className='f500'>&nbsp;{nutrition.nutrition.sodium[0]}g</span>
        </th>
        <th className='align-right tr-bot'>{nutrition.nutrition.sodium[1]}%</th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          Carbohydrates{" "}
          <span className='f500'>
            &nbsp;{nutrition.nutrition.total_carbohydrates[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'>
          {nutrition.nutrition.total_carbohydrates[1]}%
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp; &nbsp;&nbsp;Fiber &nbsp;
            {nutrition.nutrition.dietary_fiber[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'>
          {" "}
          {nutrition.nutrition.dietary_fiber[1]}%
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp; &nbsp;&nbsp;Sugars &nbsp;
            {nutrition.nutrition.total_sugars}g
          </span>
        </th>
        <th className='align-right tr-bot'></th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          <span className='f500'>
            &nbsp; &nbsp; &nbsp;&nbsp;Includes &nbsp;
            {nutrition.nutrition.added_sugars[0]}g Added
          </span>
        </th>
        <th className='align-right tr-bot'>
          {" "}
          {nutrition.nutrition.added_sugars[1]}%{" "}
        </th>
      </tr>

      <tr className='align-left px1-888'>
        <th>
          Protein
          <span className='f500'>
            &nbsp;
            {nutrition.nutrition.protein[0]}g
          </span>
        </th>
        <th className='align-right tr-bot'>
          {" "}
          {nutrition.nutrition.protein[1]}%
        </th>
      </tr>
    </table>
  );
};

export default NutritionTable;
