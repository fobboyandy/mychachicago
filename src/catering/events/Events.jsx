import React, { useCallback, useState } from "react";
import { useEffect } from "react";

import { useSelector } from "react-redux";

import par from "simple-parallax-js";

import "./ev.scss";

const Events = () => {
  const [test, setTest] = useState(null);

  const navheight = useSelector((state) => state.navheight);

  // const parallaxImg = useCallback(() => {
  //   var img = $(".img-parallax");

  //   var imgParent = $(".img-parallax").parent();

  //   var speed = img.data("speed");
  //   var imgY = imgParent.offset().top;
  //   // var winY = img.scrollTop();
  //   const winY = window.scrollY;
  //   var winH = img.height();
  //   var parentH = imgParent.innerHeight();

  //   console.log(speed, imgY, winY);

  //   // The next pixel to show on screen
  //   var winBottom = winY + winH;

  //   // console.log(winY, winH, parentH, imgY, img);

  //   // console.log(winY < imgY + parentH);
  //   // If block is shown on screen
  //   if (winBottom > imgY && winY < imgY + parentH) {
  //     // Number of pixels shown after block appear
  //     var imgBottom = (winBottom - imgY) * speed;
  //     // Max number of pixels until block disappear
  //     var imgTop = winH + parentH;
  //     // Porcentage between start showing until disappearing
  //     var imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50);
  //   }

  //   img.css({
  //     top: imgPercent + "%",
  //     transform: "translate(0, -" + imgPercent + "%)",
  //   });
  // }, [window.scrollY]);

  // useEffect(() => {
  //   $(".img-parallax").each(function (i) {
  //     $(document).on({
  //       scroll: function () {
  //         // parallaxImg();

  //         var img = $(`#parallax-${i + 1}`);

  //         var imgParent = $(`#parallax-${i + 1}`).parent();

  //         var speed = img.data("speed");
  //         var imgY = imgParent.offset().top;
  //         // var winY = img.scrollTop();
  //         const winY = window.scrollY;
  //         var winH = img.height();
  //         var parentH = imgParent.innerHeight();

  //         console.log(speed, imgY, winY);

  //         // The next pixel to show on screen
  //         var winBottom = winY + winH;

  //         // console.log(winY, winH, parentH, imgY, img);

  //         // console.log(winY < imgY + parentH);
  //         // If block is shown on screen
  //         if (winBottom > imgY && winY < imgY + parentH) {
  //           // Number of pixels shown after block appear
  //           var imgBottom = (winBottom - imgY) * speed;
  //           // Max number of pixels until block disappear
  //           var imgTop = winH + parentH;
  //           // Porcentage between start showing until disappearing
  //           // var imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50);
  //           var px = window.scrollY;
  //         }

  //         img.css({
  //           top: px + "px",
  //           transform: "translate(0, -" + px + "px)",
  //         });
  //       },
  //     });

  //     $(document).ready(() => {
  //       parallaxImg();
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   $(document).ready(() => {
  //     // console.log($(".ev-af"));
  //     // $(".ev-af").each(() => {
  //     //   console.log($(this));
  //     //   const c = $(this).children("img").outerHeight();
  //     //   $(this).css("height", c);
  //     // });

  //     if ($(".ev-af").length < 1) return;
  //     Array.prototype.forEach.call($(".ev-af"), function (e, i) {
  //       console.log($(e).children("img").attr("src"));
  //       const c = $(e).children("img").outerHeight();
  //       $(e).css("height", c);
  //     });
  //   });
  // }, [$(".ev-af")]);

  const scroll = useCallback(() => {
    const y = window.scrollY;

    $("#parallax-1").css("transform", `translate3d(0, -${y / 2.2}px, 0)`);
  }, []);

  $(window).off(window, "scroll", scroll).scroll(scroll);

  return (
    <div className="ev-parent" style={{ marginTop: navheight + "px" }}>
      <div className="ev-parallax-host">
        <img
          src="/assets/catering/test1.webp"
          alt="img1"
          className="ev-backgroundimg img-parallax"
          data-speed={-1}
          id="parallax-1"
          style={{ top: navheight + "px" }}
        />
      </div>

      <div className="ev-te" onClick={() => setTest((prev) => prev + 1)}>
        somerandomtext123
      </div>
    </div>
  );
};

export default Events;
