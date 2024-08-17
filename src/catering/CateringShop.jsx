import React, { useEffect, useState, useCallback } from "react";

import { dispatchSetLocations } from "../store/locations";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import gsap from "gsap";

import $ from "jquery";

import "./cs.scss";

import AbsoluteSelect from "../global/AbsoluteSelect";
import Leaf from "../longstuff/Leaf";
import CartSvg from "./svg/CartSvg";
// import DCM from "./drinkcategorymap/DCM.tsx";
import SelectedDrinkOverlay from "./selecteddrink/SelectedDrinkOverlay";
import { makeGetRequest } from "../helper/ajaxRequests";
import { dispatchSetCart } from "../store/cart";
import { dispatchSetDrinks } from "../store/drinks";

const CateringShop = () => {
  return (
    <div className='cs-sooncontainer'>
      <img src='/assets/catering/soon.jpg' className='cs-soon' />
    </div>
  );
  //.
  // const dispatch = useDispatch();
  // const nav = useNavigate();
  // const params = useParams();

  // const locations = useSelector((state) => state.locations);
  // const drinks = useSelector((state) => state.drinks);

  // console.log(drinks, "dr");

  // //ready states
  // const [loading, setLoading] = useState(true);
  // const [cartLoading, setCartLoading] = useState(true);

  // const [cateringRegion, setCateringRegion] = useState(null);
  // const [cateringDrinkSorted, setCateringDrinkSorted] = useState({});
  // //when a customer selects a drink
  // //will be in the link so refresh will still load the drink overlay
  // const [selectedDrink, setSelectedDrink] = useState(null);

  // const cartScroll = useCallback(() => {
  //   const cart = $(".cs-cart")[0]?.getBoundingClientRect();
  //   const nav = $(".nav-home")[0]?.getBoundingClientRect();

  //   const carthold = $(".cs-carthold")[0]?.getBoundingClientRect();
  //   if (carthold.y - 10 < nav.height) {
  //     $(".cs-cart").css("position", "fixed");
  //     $(".cs-cart").css("top", nav.height + 11.5 + "px");
  //   } else {
  //     $(".cs-cart").css("position", "absolute");
  //     $(".cs-cart").css("top", "30px");
  //   }
  // }, []);

  // $(window).unbind("scroll", cartScroll).scroll(cartScroll);
  // //scroll to top on reload
  // // useEffect(() => {
  // //   window.scrollTo({ top: 0 });
  // // }, []);

  // //sort drinks into categories to display
  // useEffect(() => {
  //   //prevents infinite loop
  //   if (cateringRegion === "unselected") return;

  //   //if no selected region do nothing
  //   if (!cateringRegion) {
  //     //set it to a string to know user has not selected a region before, aka first time user
  //     setCateringRegion("unselected");
  //     return;
  //   }

  //   const category = {};

  //   cateringRegion.cateringDrinks.forEach((t) => {
  //     category[t.category.name] ||= [];
  //     category[t.category.name].push(t);
  //   });

  //   setCateringDrinkSorted(category);
  // }, [cateringRegion]);

  // console.log(cateringDrinkSorted, "cat");

  // // //find the selected drink based off of the id provided in the link
  // // //if cannot be found, it means the drink is not available in the specific region
  // // //will refetch every time the link is changed

  // // useEffect(() => {
  // //   //not fetched
  // //   if (Object.values(cateringDrinkSorted).length < 1) return;
  // //   const drinkid = params.drinkid;

  // //   //no selected drink in the href
  // //   if (!drinkid) {
  // //     //unset the overflow to allow scroll and set the selected drink to null to get rid of the overlay
  // //     setSelectedDrink(null);
  // //     $("html").css("overflow", "unset");
  // //     return;
  // //   }

  // //   //put all available drinks in the region into one array
  // //   const alldrinks = Object.values(cateringDrinkSorted).flat();

  // //   //search the array for the specific drink
  // //   const findDrink = alldrinks.find((t) => t.id === drinkid);

  // //   //if we find the drink, set it as the selected drink
  // //   if (findDrink) {
  // //     setSelectedDrink(findDrink);

  // //     //set overflow to hidden to prevent background scroll when overlay is up
  // //     $("html").css("overflow", "hidden");
  // //   }
  // // }, [window.location.href, cateringDrinkSorted, params]);

  // useEffect(() => {
  //   if (locations.length) {
  //     setLoading(false);

  //     const findPreviousSelectedRegion = locations.find((t) => {
  //       return t.id === window.localStorage.getItem("cateringregion");
  //     });

  //     //localstorage find previously selected region
  //     if (findPreviousSelectedRegion) {
  //       setCateringRegion(findPreviousSelectedRegion);
  //     }
  //     return; //already fetched
  //   }

  //   //fetch locations
  //   $.ajax({
  //     url: "/fetchallregions",
  //     type: "GET",
  //   })
  //     .then((res) => {
  //       dispatch(dispatchSetLocations(res));
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       alert("Something went wrong, please try again");
  //       setLoading(false);
  //     });
  // }, [locations]);

  // // window.onbeforeunload = () => {
  // //   window.scrollTo(0, 0);
  // // };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   //scroll to top of page on page change and on refresh
  //   window.history.scrollRestoration = "manual";
  // }, []);

  // useEffect(() => {
  //   $(document).ready(() => {
  //     gsap.fromTo(
  //       "#catering-p",
  //       { opacity: 0, x: "-10%" },
  //       { opacity: 1, x: 0, duration: 1.2 }
  //     );
  //   });
  // }, []);

  // useEffect(() => {
  //   const findLocalCartId = window.localStorage.getItem("cartid");

  //   if (findLocalCartId) {
  //     //fetch cart
  //     async function f() {
  //       await makeGetRequest(`cart/fetchcart/${findLocalCartId}`)
  //         .then((res) => {
  //           console.log(res, "responsee");
  //           dispatch(dispatchSetCart(res));
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           alert("Something went wrong, please try again");
  //         });
  //     }

  //     f();
  //   }
  // }, []);

  // //fetch drinks
  // useEffect(() => {
  //   async function f() {
  //     await $.ajax({
  //       type: "GET",
  //       url: "/fetchalldrinks",
  //     })
  //       .then((res) => {
  //         dispatch(dispatchSetDrinks(res));
  //       })
  //       .catch((err) => {
  //         alert("Something went wrong, please try again");
  //         console.log(err);
  //       });
  //   }

  //   //prevents infinite loop
  //   if (drinks.length < 1) {
  //     f();
  //   }
  // }, [drinks]);

  // const scroll = useCallback(() => {
  //   const y = window.scrollY;

  //   if (y > $("#cs-background").outerHeight() + 100) return;

  //   $("#cs-background").css("transform", `translate3d(0, -${y / 2.2}px, 0)`);
  // }, []);

  // $(window).off(window, "scroll", scroll).scroll(scroll);

  // if (
  //   loading ||
  //   (Object.values(cateringDrinkSorted).length < 1 &&
  //     cateringRegion !== "unselected") ||
  //   drinks.length < 1
  // ) {
  //   return (
  //     <div className='abs-loading'>
  //       <div className='lds-ring' id='spinner-form'>
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className='cs-parent'>
  //     <div className='cs-background' id='cs-background'>
  //       {/* <img className='cs-img' src='/assets/catering/catering.jpeg' /> */}
  //       <div className='cs-t'>C A T E R I N G</div>
  //     </div>

  //     <div className='heightholder-locations'></div>

  //     <div className='cs-botcon'>
  //       <CartSvg />
  //       <div className='cs-carthold' />
  //       {!cateringRegion && <div>Please Select Your Region</div>}

  //       {cateringRegion && (
  //         <div className='cs-desc'>
  //           <div className='menu-title' style={{ textAlign: "center" }}>
  //             Order Catering
  //           </div>
  //           <Leaf />

  //           <div className='catering-desc cs-notice'>
  //             <div>
  //               - 10% Deposit Due Immediately. Remaining Balance Due Upon Pickup
  //               or Delivery.
  //             </div>
  //             <div style={{ marginTop: "5px" }}>
  //               - Deposit is refundable up to 48 hours before the
  //               Pickup/Delivery date.
  //             </div>
  //           </div>
  //         </div>
  //       )}

  //       <AbsoluteSelect
  //         state={{
  //           id: "catering-sel-region",
  //           novalue: "Select a Region",
  //           options: locations.map((t) => {
  //             return {
  //               name: t.name, //region.name
  //               value: t,
  //             };
  //           }),
  //           setValue: (selected) => {
  //             setCateringRegion(selected);
  //             window.localStorage.setItem("cateringregion", selected.id);
  //           },
  //           name: cateringRegion?.name,
  //         }}
  //       />

  //       {/* {Object.keys(cateringDrinkSorted).map((t, i) => (
  //         <DCM name={t} drinks={Object.values(cateringDrinkSorted)[i]} />
  //       ))} */}

  //       <SelectedDrinkOverlay cateringDrinkSorted={cateringDrinkSorted} />
  //     </div>

  //     {/* {selectedDrink && (
  //       <SelectedDrinkOverlay
  //         drink={selectedDrink}
  //         cateringDrinkSorted={cateringDrinkSorted}
  //       />
  //     )} */}
  //   </div>
  // );
};

export default CateringShop;
