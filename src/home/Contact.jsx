import React, { useState } from "react";
import Leaf from "../longstuff/Leaf";
import { useForm, ValidationError } from "@formspree/react";

import $ from "jquery";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [reason, setReason] = useState("issue"); //change to question whend oen
  const [location, setLocation] = useState("uiceast");
  const [paymentType, setPaymentType] = useState("");
  const [last4, setLast4] = useState("");

  const [desc, setDesc] = useState("");

  console.log(email);
  console.log(phone);
  console.log(name);
  console.log(reason);

  const [state, handleSubmit] = useForm("xpznyjqd", {
    data: {
      name1: name,
      email1: email,
      phone1: phone,
      reason1: reason,
      location: reason === "issue" ? location : "N/A reason is question",
      paymentType: reason === "issue" ? paymentType : "N/A reason is question",
      last4digits: reason === "issue" ? last4 : "N/A reason is question",
      description: desc,
    },
  });

  //test for valid email
  const isValidEmail = (v) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(v.toLowerCase());
  };

  $("#textarea-container").on("keydown", "textarea", function (e) {
    $(this).css("height", "auto");
    $(this).height(this.scrollHeight);
  });
  $("#textarea-container").find("textarea").keydown();

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) return;

    const information = {
      name: name,
      email: email,
      phone: phone,
      reason: reason,
      location: reason === "issue" ? location : "reason is question",
      paymentType: reason === "issue" ? paymentType : "reason is question",
      last4digits: reason === "issue" ? last4 : "reason is question",
      description: desc,
    };
  };

  return (
    <div className="contact-parent" id="contactparent">
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

      <form
        className="form-contact"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          console.log("ran");
        }}
      >
        <label htmlFor="name-contact" className="label-contact">
          Name<span className="star">*</span>
        </label>
        <input
          id="name-contact"
          className="input-contact"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />

        <label htmlFor="email-contact" className="label-contact">
          Email<span className="star">*</span>
        </label>
        <input
          id="email-contact"
          className="input-contact"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />

        <label htmlFor="phone-contact" className="label-contact">
          Phone Number<span className="star">*</span>
        </label>
        <input
          id="phone-contact"
          className="input-contact"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label for="reason-contact" className="label-contact">
          Reason<span className="star">*</span>
        </label>
        <select
          className="input-contact"
          id="reason-contact"
          onChange={(e) => setReason(e.target.value)}
          value={reason}
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
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input-contact"
            >
              <option value="uiceast">UIC East</option>
              <option value="uicwest">UIC West</option>
              <option value="block37">Block 37</option>
              <option value="uicbsb">UIC Behavioral Science Building</option>
              <option value="rush">Rush University</option>
              <option value="beardpapa">Beard Papa</option>
              <option value="ucmed">University of Chicago</option>
              <option value="submarine">Submarine</option>
            </select>

            <div className="label-contact">
              Form of Payment<span className="star">*</span>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                onClick={() => setPaymentType("card")}
                name="paymenttype"
              />
              <label className="mleft10">Card Swipe</label>
            </div>

            <div className="radio-container">
              <input
                type="radio"
                onClick={() => setPaymentType("mobilewallet")}
                name="paymenttype"
              />
              <label className="mleft10">
                Mobile Wallet (Google Pay, Apple Pay, etc)
              </label>
            </div>
            <div className="radio-container">
              <input
                type="radio"
                onClick={() => setPaymentType("cash")}
                name="paymenttype"
              />
              <label className="mleft10">Cash</label>
            </div>

            {paymentType === "card" ? (
              <div style={{ marginTop: "10px" }}>
                <label for="name-contact" className="label-contact">
                  Last 4 Digits of Card<span className="star">*</span>
                </label>
                <input
                  className="input-contact"
                  value={last4}
                  onChange={(e) => setLast4(e.target.value)}
                  maxLength={4}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        )}

        <div
          id="textarea-container"
          style={{ marginTop: reason === "question" ? 0 : "15px" }}
        >
          <label for="name-contact" className="label-contact">
            {reason === "question"
              ? "Your Question Below"
              : "Please describe the issue"}
            <span className="star">*</span>
          </label>
          <textarea
            className="tarea-contact"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button type="submit" className="submitbut-contact">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
