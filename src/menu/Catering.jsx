import React from "react";
import Leaf from "../longstuff/Leaf";

const Catering = () => {
  return (
    <div className='catering-parent op0' id='catering-p'>
      <div id='catering-intersectingobserver' />
      <div className='menu-title' style={{ textAlign: "center" }}>
        Bring Mycha to You!
      </div>
      <Leaf />
      <div className='catering-desc'>
        Special moments calls for a grand celebration. Celebrate your big
        moments with all the things you love by your side, such as your favorite
        boba tea. Whether you have an upcoming birthday, wedding reception,
        corporate event, family parties, housewarming, or graduation parties,
        make your special day that much better with Mycha drinks!
      </div>
      <div className='catering-desc'>
        All drinks on our{" "}
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => {
            const v = document.getElementById("fruitteasection");
            v.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            });
          }}
        >
          menu
        </span>{" "}
        currently are available for catering! Different toppings? Less sugar? No
        problem! Drinks are fully customizable to your needs. In addition to
        Mycha catering, we will{" "}
        <span style={{ fontStyle: "italic", color: "rgb(109, 214, 49)" }}>
          deliver your favorite drinks to any location!
        </span>
      </div>
      {/* <div className='catering-desc'>
        Please fill out the{" "}
        <a
          style={{
            fontWeight: "600",
            textDecoration: "underline",
            cursor: "pointer",
            color: "black",
          }}
          href='https://docs.google.com/forms/d/1JiVqiAvxgzsK34476zkhRa5DtzACCIoqK93hj4JL8lM/viewform?edit_requested=true'
          target='_blank'
          rel='noopener noreferrer'
        >
          Catering Form
        </a>{" "}
        below and let us know which drinks you would like to order and tell us a
        little bit about your event. Please contact us 48 hours in advance for
        catering services. We kindly ask that for larger parties (200+) please
        give us a two week notice so that our baristas can prepare to fulfill
        the order on the day of the event.
      </div> */}
      <div></div>
      <a
        className='catering-form'
        href='https://docs.google.com/forms/d/1JiVqiAvxgzsK34476zkhRa5DtzACCIoqK93hj4JL8lM/viewform?edit_requested=true'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='catering-formchild'>Catering Form</span>
      </a>{" "}
    </div>
  );
};

export default Catering;
