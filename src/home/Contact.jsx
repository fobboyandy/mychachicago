import React, { useEffect, useState } from "react";
import Leaf from "../longstuff/Leaf";
import { useForm } from "@formspree/react";

import $ from "jquery";
import gsap from "gsap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [reason, setReason] = useState("question/suggestion"); //change to question whend oen
  const [location, setLocation] = useState("uiceast");
  const [paymentType, setPaymentType] = useState("");
  const [last4, setLast4] = useState("");

  const [desc, setDesc] = useState("");

  const [state, handleSubmit] = useForm("xpznyjqd", {
    data: {
      name1: name,
      email1: email,
      phone1: phone,
      reason1: reason,
      location:
        reason === "issue" ? location : "N/A reason is question/suggestion",
      paymentType:
        reason === "issue" ? paymentType : "N/A reason is question/suggestion",
      last4digits:
        reason === "issue" ? last4 : "N/A reason is question/suggestion",
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

  const handleSubmit2 = () => {
    $("#form--contact").addClass("nodisplay");
    $("#spinner-form").removeClass("nodisplay");
  };

  //error states
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [paymentTypeError, setPaymentTypeError] = useState(false);
  const [last4Error, setLast4Error] = useState(false);
  const [descError, setDescError] = useState(false);

  function checkValid() {
    let valid = true;
    if (name === "") {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    if (!isValidEmail(email)) {
      valid = false;
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (phone === "") {
      valid = false;
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    if (reason === "question/suggestion") {
      if (desc === "") {
        valid = false;
        setDescError(true);
      } else {
        setDescError(false);
      }
    } else if (reason === "issue") {
      if (desc === "") {
        valid = false;
        setDescError(true);
      } else {
        setDescError(false);
      }

      if (paymentType === "") {
        valid = false;
        setPaymentTypeError(true);
      } else if (paymentType === "card") {
        if (last4.length !== 4) {
          valid = false;
          setLast4Error(true);
        } else {
          setLast4Error(false);
        }
      } else {
        setPaymentTypeError(false);
      }
    }

    return valid;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    gsap.fromTo(
      "#contactparent",
      { opacity: 0, x: "10%" },
      {
        opacity: 1,
        x: 0,
        ease: "power1",
        duration: 1.4,
      }
    );
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "5vh",
        marginBottom: "5vh",
      }}
      id="contactparent"
    >
      {" "}
      <div className="contact-parent">
        <div id="contact-intersectingobserver" />
        <div className="head-section2">Contact Us</div>
        <Leaf />

        <div className="desc-sectioncontact mbot">
          From questions and suggestions to machine or transaction issues, we
          are here to help!
        </div>

        <div className="desc-sectioncontact mbot">
          If you see a $1.50 (or a $5.00) charge on your account but the machine
          did not dispense a drink, please note that the $1.50 (or $5.00) is a
          pending charge for each time you swipe the card but it will disappear
          after a few business days. Keep an eye on the pending charge and if
          you still see it after a few business days, please let us know.
        </div>

        <div className="desc-sectioncontact mbot">
          If you experienced other issues at a Mycha machine, please submit the
          refund request below and we’ll get back to you within one business
          day. Please be reassured that we look and respond to all requests. We
          value our customers and we promise to handle each request with top
          priority. In the unlikely event that our response is delayed, text us
          at our number or submit the form again.
        </div>

        <div className="desc-sectioncontact mbot">
          If it’s an urgent matter, please text Mycha @ (847) 260-8387 or email
          us at{" "}
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

        {!state.succeeded ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form
              className="form-contact"
              onSubmit={(e) => {
                e.preventDefault();
                const shouldSubmit = checkValid();
                if (shouldSubmit) {
                  handleSubmit(e);
                  handleSubmit2();
                } else return;
              }}
              id="form--contact"
            >
              <label htmlFor="name-contact" className="label-contact">
                Name<span className="star">*</span>
              </label>
              <div
                className="errormsg"
                style={{ display: nameError ? "" : "none" }}
              >
                Missing Name!
              </div>
              <input
                id="name-contact"
                className="input-contact"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />

              <label htmlFor="email-contact" className="label-contact">
                Your Email<span className="star">*</span>
              </label>

              <div
                className="errormsg"
                style={{ display: emailError ? "" : "none" }}
              >
                Invalid Email!
              </div>
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
              <div
                className="errormsg"
                style={{ display: phoneError ? "" : "none" }}
              >
                Invalid Number!
              </div>
              <input
                id="phone-contact"
                className="input-contact"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
              />

              <label htmlFor="reason-contact" className="label-contact">
                Reason<span className="star">*</span>
              </label>
              <select
                className="input-contact"
                id="reason-contact"
                onChange={(e) => setReason(e.target.value)}
                value={reason}
              >
                <option value="question/suggestion">Question/Suggestion</option>
                <option value="issue">Machine/Transaction Issue</option>
              </select>

              {reason === "question/suggestion" ? (
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
                    <option value="uicbsb">
                      UIC Behavioral Science Building
                    </option>
                    <option value="rush">Rush University</option>
                    <option value="beardpapa">Beard Papa</option>
                    <option value="ucmed">University of Chicago</option>
                    <option value="submarine">Submarine</option>
                  </select>

                  <div className="label-contact">
                    Form of Payment<span className="star">*</span>
                  </div>
                  <div
                    className="errormsg"
                    style={{ display: paymentTypeError ? "" : "none" }}
                  >
                    Please Select
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
                      <label htmlFor="name-contact" className="label-contact">
                        Last 4 Digits of Card<span className="star">*</span>
                      </label>
                      <div
                        className="errormsg"
                        style={{ display: last4Error ? "" : "none" }}
                      >
                        Missing 4 digits!
                      </div>
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
                <label htmlFor="name-contact" className="label-contact">
                  {reason === "question/suggestion"
                    ? "Your Question/Suggestion Below"
                    : "Please describe the issue"}
                  <span className="star">*</span>
                </label>
                <div
                  className="errormsg"
                  style={{ display: descError ? "" : "none" }}
                >
                  Missing description!
                </div>
                <textarea
                  className="tarea-contact"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  style={{ marginTop: "5px" }}
                />
              </div>

              <button type="submit" className="submitbut-contact">
                Submit
              </button>
            </form>

            <div className="lds-ring nodisplay" id="spinner-form">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="ty-message">
            Thank you, your message has been received.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
