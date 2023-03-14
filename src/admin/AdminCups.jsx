import React, { useEffect } from "react";
import { cups2 } from "../checker/CupsObj";

const AdminCups = ({ drink, selectedDrink, setSelectedDrink }) => {
  useEffect(() => {
    let v = document.getElementById(`stock-cups-${drink.htmlid}`);

    v.innerHTML =
      JSON.parse(JSON.stringify(cups2[drink.htmlid]())) || cups2.default;
  }, []);
  return (
    <div
      className='stock-admincupparent'
      style={{
        border: selectedDrink?.htmlid === drink.htmlid && "1px solid black",
      }}
      onClick={() => setSelectedDrink(drink)}
    >
      <div id={`stock-cups-${drink.htmlid}`} className='stock-admincups'>
        AdminCups
      </div>

      <div className='stock-drinkname'>{drink.name}</div>
    </div>
  );
};

export default AdminCups;
