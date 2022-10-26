import React, { useState } from "react";
import Leaf from "../longstuff/Leaf";

const Contact = () => {
  const [reason, setReason] = useState("question");

  return (
    <div className="contact-parent">
      <div className="head-section2">Contact Us</div>
      <Leaf />

      <div className="desc-section2 mbot">
        From questions to machine/transaction issues, we are here to help!
      </div>

      <div className="desc-section2 mbot">
        If you see a $1.50 (or a $5.00) charge on your account but the machine
        did not dispense a drink, please note that the $1.50 (or $5.00) is a
        pending charge for each time you swipe the card but it will disappear
        after a few business days. Keep an eye on the pending charge and if you
        still see it after a few business days, please let us know.
      </div>

      <div className="desc-section2 mbot">
        If you experienced other issues at a Mycha machine, please submit the
        refund request below and we’ll get back to you within one business day.
        Please be reassured that we look and respond to all requests. We value
        our customers and we promise to handle each request with top priority.
        In the unlikely event that our response is delayed, text us at our
        number or submit the form again.
      </div>

      <div className="desc-section2 mbot">
        If it’s an urgent matter, please text Mycha @ (847) 260-8387 or email us
        at{" "}
        <a
          href="mailto:mychamachine@gmail.com"
          style={{
            fontStyle: "italic",
            fontWeight: "600",
            color: "rgb(51,51,51)",
            textDecoration: "none",
          }}
        >
          mychamachine@gmail.com
        </a>
        . We are only seconds away.
      </div>

      <form className="form-contact">
        <label for="name-contact" className="label-contact">
          Name<span className="star">*</span>
        </label>
        <input id="name-contact" className="input-contact" />

        <label for="email-contact" className="label-contact">
          Email<span className="star">*</span>
        </label>
        <input id="email-contact" className="input-contact" />

        <label for="phone-contact" className="label-contact">
          Phone Number<span className="star">*</span>
        </label>
        <input id="phone-contact" className="input-contact" />

        <label for="reason-contact" className="label-contact">
          Reason<span className="star">*</span>
        </label>
        <select
          className="input-contact"
          id="reason-contact"
          onChange={(e) => setReason(e.target.value)}
        >
          <option value="question">Question</option>
          <option value="issue">Machine/Transaction Issue</option>
        </select>

        {reason === "question" ? (
          ""
        ) : (
          <div>
            <div className="label-contact">
              ATM Location<span className="star">*</span>
            </div>
            <ul style={{ listStyle: "none" }}>
              <li>
                <input type="radio" />
              </li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
