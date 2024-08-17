import React, { useState } from "react";

const CartMapItem = ({ item, allDrinks }) => {
  const currentDrink = useState(allDrinks.find((t) => t.id === item.drinkId));

  return (
    <div>
      <div className='cart-fr'>
        <img src={""} />

        <div className='cart-frc'>
          <div className='f-t-main'>{currentDrink.name}</div>
        </div>
      </div>
    </div>
  );
};

export default CartMapItem;
