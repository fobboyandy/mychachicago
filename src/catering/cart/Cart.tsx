import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import drinks from "../../store/drinks";
import { dispatchSetShowCart } from "../../store/showCart";

import "./cart.scss";
import CartMapItem from "./CartMapItem";

const Cart = () => {
  const dispatch = useDispatch();

  //   const [width, setWidth] = useState<string>("335px");

  const showCart = useSelector((state) => state.showCart);
  const cart = useSelector((state) => state.cart);
  const drinks = useSelector((state) => state.drinks);

  const [allDrinks, setAllDrinks] = useState([]);

  console.log(cart, "dr");

  //   useEffect(() => {
  //     setWidth);
  //   }, [$(".cart-inner")]);

  useEffect(() => {
    //already ran
    if (allDrinks.length) return;

    //drinks state not initalized
    if (drinks.length < 1) return;

    setAllDrinks(drinks.map((t) => t.drinks).flat(Infinity));
  }, [drinks]);

  //drink state not set yet in cateringshop component
  if (drinks.length < 1 || allDrinks.length < 1) return;

  return (
    // <div
    //   className='cart-main'
    //   onClick={() => dispatch(dispatchSetShowCart(false))}
    //   style={{ zIndex: showCart ? 20 : -1 }}
    // >
    <div
      className='cart-inner'
      //   onClick={(e) => e.stopPropagation()}
      style={{
        transform: showCart ? "translate(0)" : `translateX(330px)`,
      }}
    >
      <div>
        <div className='cart-p'>
          <div className='f-t-main'>Your Cart</div>
          <div className='grow' />
          <div
            className='f-s-main cart-close'
            onClick={() => dispatch(dispatchSetShowCart(false))}
          >
            CLOSE
          </div>
        </div>

        <div className='cart-div' />

        <div>
          {cart?.drinks?.length < 1 || !cart?.drinks ? (
            <div className='f-s-main'>You have no items in your cart</div>
          ) : (
            <div>
              {cart?.drinks?.map((t) => (
                <CartMapItem item={t} allDrinks={allDrinks} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Cart;
