import React, { useEffect, useRef, useState } from "react";
import "./menuitem.scss";
import { allItems } from "../menuobj";
import { useNavigate, useParams } from "react-router-dom";

import NutritionTable from "./NutritionTable";
import NutritionTableLarge from "./NutritionTableLarge";
import NotFound from "../../NotFound";

import $ from "jquery";

const MenuItem = () => {
  const params = useParams();
  const history = useNavigate();

  const [selectedItem, setSelectedItem] = useState({});
  // const [smallNutrition, setSmallNutrition] = useState({});
  // const [largeNutrition, setLargeNutrition] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [showDesc, setShowDesc] = useState(true);
  const [showNutrition, setShowNutrition] = useState(false);

  // const [smallOrLarge, setSmallOrLarge] = useState(
  //   params.id === 8 ? "large" : "small"
  // );

  const [nutritionIndex, setNutritionIndex] = useState(0);

  const containerRef = useRef(null);

  function handleScroll(index) {
    $(".mitem-tableparent")
      .stop()
      .animate(
        {
          scrollLeft: $(`#tablehead-${index}`).position()?.left,
        },
        0
      );
  }

  // function leftScroll() {
  //   containerRef.current.scrollLeft += 500;
  //   setSmallOrLarge("large");
  // }

  // function rightScroll() {
  //   containerRef.current.scrollLeft -= 1000;
  //   setSmallOrLarge("small");
  // }

  // useEffect(() => {
  //   $(document).ready(() => {
  //     const v = document.getElementById("tableparent");
  //     setV(v);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (v === "") return;
  //   //loosely eq because params.id is a string
  //   // if (params.id == 8 || params.id == 7 || params.id == 6) return;

  //   let isDown = false;
  //   let startX;
  //   let scrollLeft;

  //   function vMouseMove(e) {
  //     if (!isDown) return;

  //     e.preventDefault();
  //     const x = e.pageX - v.scrollLeft;

  //     const walk = x - startX;

  //     v.scrollLeft = scrollLeft - walk;

  //     setTimeout(() => {
  //       if (v.scrollLeft > v.offsetWidth / 2) {
  //         setSmallOrLarge("large");
  //       } else {
  //         setSmallOrLarge("small");
  //       }
  //     }, 500);
  //   }

  //   function handleMouseDown(e) {
  //     isDown = true;
  //     startX = e.pageX - v.scrollLeft;
  //     scrollLeft = v.scrollLeft;
  //   }

  //   function isDownFalse() {
  //     isDown = false;
  //   }

  //   $(document).ready(() => {
  //     v?.addEventListener("mousedown", handleMouseDown);

  //     v?.addEventListener("mouseup", isDownFalse);

  //     v?.addEventListener("mouseleave", isDownFalse);

  //     v?.addEventListener("mousemove", vMouseMove);
  //   });

  //   return () => {
  //     v?.removeEventListener("mousemove", vMouseMove);
  //     v?.removeEventListener("mouseup", isDownFalse);
  //     v?.removeEventListener("mouseleave", isDownFalse);
  //     v?.removeEventListener("mousedown", handleMouseDown);
  //   };
  // }, [v, params.id]);

  useEffect(() => {
    const id = params.id;
    // if (params.id === "8") {
    //   setSmallOrLarge("large");
    // }

    // const item = allItems.find((item) => item.id === Number(id));

    // setSelectedItem(item);
    // setSmallNutrition(item?.nutrition.small);
    // setLargeNutrition(item?.nutrition.large);
    // setIsLoading(false);

    $.ajax({
      url: `/fetchdrink/${id}`,
      type: "GET",
    })
      .then((res) => {
        console.log(res);

        setSelectedItem(res);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Something went wrong, please try again");
        setIsLoading(false);
      });
  }, [params.id]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (isLoading) {
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

  if (!isLoading && !selectedItem?.id) {
    return <NotFound />;
  }

  return (
    <div>
      <div style={{ width: "100%" }} className='mitem-parent'>
        <div className='mitem-container'>
          <div className='mitem-imgcontainer'>
            <img
              src={selectedItem.img ? selectedItem.img : selectedItem.pathname}
              className='mitem-img'
              alt='cup'
            />
          </div>
          <div className='mitem-tableouter'>
            <div className='mitem-head'>{selectedItem.name}</div>

            <div className='mitem-f'>
              <div
                className='mitem-sel'
                onClick={() => {
                  setShowDesc((prev) => !prev);
                }}
                style={{ marginBottom: showDesc && 0 }}
              >
                Description
                <div className='grow' />
                <div
                  className='mitem-caret'
                  style={{ transform: !showDesc && "rotate(-90deg)" }}
                />
              </div>

              <div
                style={{ marginBottom: showDesc ? "20px" : 0 }}
                className='mitem-mar'
              />

              <div
                className='mitem-height mitem-desc'
                style={{
                  maxHeight: showDesc ? "400px" : 0,
                }}
              >
                {selectedItem?.desc}
              </div>

              <div
                style={{ marginBottom: showDesc ? "30px" : 0 }}
                className='mitem-mar'
              />

              <div
                className='mitem-sel'
                onClick={() => {
                  setShowNutrition((prev) => !prev);
                }}
              >
                Nutrition Facts
                <div className='grow' />
                <div
                  className='mitem-caret'
                  style={{ transform: !showNutrition && "rotate(-90deg)" }}
                />
              </div>
              <div
                style={{
                  // transform: showNutrition ? "scaleY(1)" : "scaleY(0)",
                  // display: !showNutrition && "none",
                  maxHeight: showNutrition ? "600px" : 0,
                  transition: ".6s ease all",
                }}
                className='mitem-height'
              >
                <div className='mitem-select'>
                  {selectedItem?.sizes?.map((size, i) => (
                    <div
                      className='mitem-selectchild'
                      onClick={() => {
                        // leftScroll();
                        handleScroll(i);
                        setNutritionIndex(i);
                      }}
                      style={{
                        borderBottom:
                          i === nutritionIndex && "1.5px solid black",
                      }}
                    >
                      {size?.name[0].toUpperCase().concat(size?.name.slice(1))}
                    </div>
                  ))}
                </div>
                {/* <div
                  className='mitem-tableparent'
                  ref={containerRef}
                  id='tableparent'
                >
                  <NutritionTable
                    selectedItem={selectedItem}
                    smallNutrition={smallNutrition}
                    isLoading={isLoading}
                  />

                  {selectedItem.id !== 6 &&
                    selectedItem.id !== 7 &&
                    selectedItem.id !== 8 && (
                      <NutritionTableLarge
                        selectedItem={selectedItem}
                        largeNutrition={largeNutrition}
                        isLoading={isLoading}
                      />
                    )}
                </div> */}

                <div
                  className='mitem-tableparent'
                  ref={containerRef}
                  id='tableparent'
                >
                  {selectedItem?.sizes?.map((size, i) => (
                    <NutritionTable nutrition={size} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          position: "relative",
          height: "50px",
          paddingBottom: "10vh",
        }}
      >
        <div
          className='checkstock-button'
          onClick={() => history("/locations/check")}
        >
          Check Stock
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
