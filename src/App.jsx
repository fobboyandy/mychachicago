import React, { useEffect } from "react";
import Machine from "./Machine";
import Boba from "./Boba";
import QtyOverlay from "./QtyOverlay";
import { arr } from "./longstuff/drinks";

import $ from "jquery";

const App = () => {
  //   useEffect(() => {
  //     $(document).ready(() => {
  //       $(".drink-cups").each((i, e) => {
  //         $(e)
  //           .mouseover(function () {
  //             const element = $(e).siblings(".displaynone");
  //             element.toggleClass("displaynone");
  //           })
  //           .mouseleave(function () {
  //             const element = $(e).siblings(".quantity-display");
  //             element.addClass("displaynone");
  //           });
  //       });
  //     });
  //   }, []);

  useEffect(() => {
    const v = document.getElementById("lycheetea");
  }, []);

  return (
    <div>
      <div className='machine-container'>
        <img
          src='https://cdn.discordapp.com/attachments/779278654714675232/1030309176506855474/unknown.png'
          className='machine-img'
          alt='cup'
        />

        <div className='container-cups'>
          {arr.map((drink) => (
            <div>
              <div
                style={{ position: "relative", zIndex: 1 }}
                id={drink.id}
                className='container-map'
              >
                <Boba />
              </div>
              <QtyOverlay drink={drink} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
