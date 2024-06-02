import React, { useEffect, useState, useCallback } from "react";

import { dispatchSetLocations } from "../store/locations";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import gsap from "gsap";

import $ from "jquery";

import "./cs.scss";

import AbsoluteSelect from "../global/AbsoluteSelect";
import Leaf from "../longstuff/Leaf";
import CartSvg from "./svg/CartSvg";
import Dcm from "./drinkcategorymap/dcm";

const CateringShop = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const locations = useSelector((state) => state.locations);

  const [loading, setLoading] = useState(true);

  const [cateringRegion, setCateringRegion] = useState(null);
  const [cateringDrinkSorted, setCateringDrinkSorted] = useState({});

  console.log(cateringDrinkSorted, "sorted");

  const cartScroll = useCallback(() => {
    const cart = $(".cs-cart")[0]?.getBoundingClientRect();
    const nav = $(".nav-home")[0]?.getBoundingClientRect();

    const carthold = $(".cs-carthold")[0]?.getBoundingClientRect();
    if (carthold.y - 10 < nav.height) {
      $(".cs-cart").css("position", "fixed");
      $(".cs-cart").css("top", nav.height + 11.5 + "px");
    } else {
      $(".cs-cart").css("position", "absolute");
      $(".cs-cart").css("top", "30px");
    }
  }, []);

  $(window).unbind("scroll", cartScroll).scroll(cartScroll);
  //scroll to top on reload
  // useEffect(() => {
  //   window.scrollTo({ top: 0 });
  // }, []);

  //sort drinks into categories to display
  useEffect(() => {
    //if no selected region do nothing
    if (!cateringRegion) return;

    const category = {};

    cateringRegion.cateringDrinks.forEach((t) => {
      category[t.category.name] ||= [];
      category[t.category.name].push(t);
    });

    setCateringDrinkSorted(category);
  }, [cateringRegion]);

  useEffect(() => {
    if (locations.length) {
      setLoading(false);

      const findPreviousSelectedRegion = locations.find((t) => {
        return t.id === window.localStorage.getItem("cateringregion");
      });

      //localstorage find previously selected region
      if (findPreviousSelectedRegion) {
        setCateringRegion(findPreviousSelectedRegion);
      }
      return; //already fetched
    }

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
  }, [locations]);

  // window.onbeforeunload = () => {
  //   window.scrollTo(0, 0);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    //scroll to top of page on page change and on refresh
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    $(document).ready(() => {
      gsap.fromTo(
        "#catering-p",
        { opacity: 0, x: "-10%" },
        { opacity: 1, x: 0, duration: 1.2 }
      );
    });
  }, []);

  const scroll = useCallback(() => {
    const y = window.scrollY;

    if (y > $("#cs-background").outerHeight() + 100) return;

    $("#cs-background").css("transform", `translate3d(0, -${y / 2.2}px, 0)`);
  }, []);

  $(window).off(window, "scroll", scroll).scroll(scroll);

  if (loading || Object.values(cateringDrinkSorted).length < 1) {
    return (
      <div className='abs-loading'>
        <div className='lds-ring' id='spinner-form'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className='cs-parent'>
      <div className='cs-background' id='cs-background'>
        {/* <img className='cs-img' src='/assets/catering/catering.jpeg' /> */}
        <div className='cs-t'>C A T E R I N G</div>
      </div>

      <div className='heightholder-locations'></div>

      <div className='cs-botcon'>
        <CartSvg />
        <div className='cs-carthold' />
        {!cateringRegion && <div>Please Select Your Region</div>}

        {cateringRegion && (
          <div className='cs-desc'>
            <div className='menu-title' style={{ textAlign: "center" }}>
              Bring Mycha to You!
            </div>
            <Leaf />
            <div className='catering-desc'>
              Special moments calls for a grand celebration. Celebrate your big
              moments with all the things you love by your side, such as your
              favorite boba tea. Whether you have an upcoming birthday, wedding
              reception, corporate event, family parties, housewarming, or
              graduation parties, make your special day that much better with
              Mycha drinks!
            </div>
            <div className='catering-desc'>
              Different toppings? Less sugar? No problem! Drinks are fully
              customizable to your needs. In addition to Mycha catering, we will{" "}
              <span style={{ fontStyle: "italic", color: "rgb(109, 214, 49)" }}>
                deliver your favorite drinks to your events!
              </span>
            </div>

            <div className='catering-desc cs-notice'>
              Note: 10% Deposit Due Immediately. Remaining Balance Due Upon
              Pickup or Delivery. Deposit is refundable up to 48 hours before
              the Pickup/Delivery date. Some drinks are seasonal or only
              available in some regions.
            </div>
          </div>
        )}

        <AbsoluteSelect
          state={{
            id: "catering-sel-region",
            novalue: "Select a Region",
            options: locations.map((t) => {
              return {
                name: t.name, //region.name
                value: t,
              };
            }),
            setValue: (selected) => {
              setCateringRegion(selected);
              window.localStorage.setItem("cateringregion", selected.id);
            },
            name: cateringRegion?.name,
          }}
        />

        {Object.keys(cateringDrinkSorted).map((t, i) => (
          <Dcm name={t} drinks={Object.values(cateringDrinkSorted)[i]} />
        ))}
      </div>
    </div>
  );
};

export default CateringShop;
