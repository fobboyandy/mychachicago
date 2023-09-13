import React, { useEffect, useState, useCallback } from "react";
import Leaf from "../longstuff/Leaf";
import { useForm } from "@formspree/react";

import $ from "jquery";
import gsap from "gsap";
import { locationWithoutState } from "../location/locationsobj";
import { useDispatch, useSelector } from "react-redux";
import { dispatchSetLocations } from "../store/locations";

const Contact = () => {
  const dispatch = useDispatch();

  const alllocations = useSelector((state) => state.locations);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!alllocations.length) {
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
        }, []);
    } else {
      setLoading(false);
    }
  }, [alllocations]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [reason, setReason] = useState("question/suggestion"); //change to question whend oen
  const [location, setLocation] = useState(null);
  const [paymentType, setPaymentType] = useState("");
  const [last4, setLast4] = useState("");

  const [region, setRegion] = useState(null);

  const [desc, setDesc] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const [state, handleSubmit] = useForm("xpznyjqd", {
    data: {
      name1: name,
      email1: email,
      phone1: phone,
      reason1: reason,
      location:
        reason === "issue"
          ? region?.name + " - " + location?.name
          : "N/A reason is question/suggestion",
      paymentType:
        reason === "issue" ? paymentType : "N/A reason is question/suggestion",
      last4digits:
        reason === "issue" ? last4 : "N/A reason is question/suggestion",
      description: desc,
    },
  });

  const [showSelect, setShowSelect] = useState(false);
  const [showSelect2, setShowSelect2] = useState(false);
  const [showRegion, setShowRegion] = useState(false);

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
    setSubmitting(true);
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
    if (loading) return;
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
  }, [loading]);

  const clickout1 = useCallback(() => {
    var $target = $(event.target);

    if (
      !$target.closest("#reason").length &&
      !$target.closest(".li-contact").length &&
      showSelect
    ) {
      setShowSelect(false);
    }
  }, [showSelect]);

  const clickout2 = useCallback(() => {
    var $target = $(event.target);

    if (
      !$target.closest("#selectlocation-container").length &&
      !$target.closest(".li-contact").length &&
      showSelect2
    ) {
      setShowSelect2(false);
    }

    if (
      !$target.closest("#region-container").length &&
      !$target.closest(".li-contact").length &&
      showRegion
    ) {
      setShowRegion(false);
    }
  }, [showSelect2, showRegion]);

  $(document).off("click", document, clickout1).click(clickout1);
  $(document).off("click", document, clickout2).click(clickout2);

  if (loading) {
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
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "5vh",
        marginBottom: "5vh",
      }}
      id='contactparent'
    >
      {" "}
      <div className='contact-parent'>
        <div id='contact-intersectingobserver' />
        <div className='head-section2'>Contact Us</div>
        <Leaf />

        <div className='desc-sectioncontact mbot'>
          From questions and suggestions to machine or transaction issues, we
          are here to help!
        </div>

        <div className='desc-sectioncontact mbot'>
          If you see a $1.50 (or a $5.00) charge on your account but the machine
          did not dispense a drink, please note that the $1.50 (or $5.00) is a
          pending charge for each time you swipe the card but it will disappear
          after a few business days. Keep an eye on the pending charge and if
          you still see it after a few business days, please let us know.
        </div>

        <div className='desc-sectioncontact mbot'>
          If you experienced other issues at a Mycha machine, please submit the
          refund request below and we’ll get back to you within one business
          day. Please be reassured that we look and respond to all requests. We
          value our customers and we promise to handle each request with top
          priority. In the unlikely event that our response is delayed, text us
          at our number or submit the form again.
        </div>

        <div className='desc-sectioncontact mbot'>
          If it’s an urgent matter, please text Mycha @ (847) 260-8387 or email
          us at{" "}
          <a
            href='mailto:mychamachine@gmail.com'
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
              paddingBottom: "10vh",
            }}
          >
            <form
              className='form-contact'
              onSubmit={(e) => {
                e.preventDefault();
                const shouldSubmit = checkValid();
                if (shouldSubmit) {
                  const t = new Promise((resolve, reject) => {
                    handleSubmit(e);
                    handleSubmit2();
                    setSubmitting(false);
                    resolve();
                  }).catch(() => {
                    alert("Something went wrong, please try again.");
                  });
                } else return;
              }}
              id='form--contact'
            >
              <label htmlFor='name-contact' className='label-contact'>
                Name<span className='star'>*</span>
              </label>
              {nameError && (
                <div
                  className='errormsg'
                  style={{ display: nameError ? "" : "none" }}
                >
                  Missing Name!
                </div>
              )}
              <input
                id='name-contact'
                className='input-contact'
                value={name}
                onChange={(e) => setName(e.target.value)}
                name='name'
                type='text'
              />

              <label htmlFor='email-contact' className='label-contact'>
                Your Email<span className='star'>*</span>
              </label>

              {emailError && (
                <div
                  className='errormsg'
                  style={{ display: emailError ? "" : "none" }}
                >
                  Invalid Email!
                </div>
              )}
              <input
                id='email-contact'
                className='input-contact'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name='email'
                type='text'
              />

              <label htmlFor='phone-contact' className='label-contact'>
                Phone Number<span className='star'>*</span>
              </label>
              {phoneError && (
                <div
                  className='errormsg'
                  style={{ display: phoneError ? "" : "none" }}
                >
                  Invalid Number!
                </div>
              )}
              <input
                id='phone-contact'
                className='input-contact'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type='tel'
              />

              <label htmlFor='reason-contact' className='label-contact'>
                Reason<span className='star'>*</span>
              </label>

              <div
                className='select-container'
                onClick={() => {
                  setShowSelect((prev) => !prev);
                }}
                style={{ zIndex: 10 }}
              >
                <div className='select-contact2' id='reason'>
                  {reason === "question/suggestion"
                    ? "Question/Suggestion"
                    : "Machine/Transaction Issue"}
                </div>

                {showSelect && (
                  <div className='li-parent' id='reason-c'>
                    <div
                      className='li-contact'
                      onClick={() => setReason("question/suggestion")}
                      id='question-suggestion'
                      style={{ display: showSelect ? "" : "none" }}
                    >
                      Question/Suggestion
                    </div>

                    <div
                      className='li-contact'
                      onClick={() => setReason("issue")}
                      id='machine-transaction-issue'
                      style={{
                        display: showSelect ? "" : "none",
                        borderRadius: "0 0 4px 4px",
                        borderBottom: "none",
                      }}
                    >
                      Machine/Transaction Issue
                    </div>
                  </div>
                )}
              </div>

              {reason === "question/suggestion" ? (
                ""
              ) : (
                <div>
                  <div className='label-contact'>
                    Region<span className='star'>*</span>
                  </div>

                  <div
                    className='select-container2'
                    id='region-container'
                    onClick={() => {
                      setShowRegion((prev) => !prev);
                    }}
                  >
                    <div className='select-contact2' id='region'>
                      {region?.name?.toUpperCase() || "Select a region"}
                    </div>
                    {showRegion && (
                      <div className='li-parent' id='region-c'>
                        {alllocations.map((item, i, a) => (
                          <div
                            className='li-contact2'
                            onClick={() => {
                              setRegion(item);
                              setLocation(null);
                            }}
                            style={{
                              display: !showRegion && "none",
                              position: "relative",
                              zIndex: 2,
                              borderBottom: i === a.length - 1 && "none",
                            }}
                          >
                            {item?.name?.toUpperCase()}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {region && (
                    <div>
                      <div className='label-contact'>
                        ATM Location<span className='star'>*</span>
                      </div>

                      <div
                        className='select-container2'
                        id='selectlocation-container'
                        onClick={() => {
                          setShowSelect2((prev) => !prev);
                        }}
                      >
                        <div className='select-contact2' id='select-location'>
                          {location?.name || "Select a location"}
                        </div>
                        {showSelect2 && (
                          <div className='li-parent' id='select-locationc'>
                            {alllocations
                              .find(
                                (v) =>
                                  v.name.toLowerCase() ===
                                  region?.name.toLowerCase()
                              )
                              .locations.map((item, i, a) => (
                                <div
                                  className='li-contact2'
                                  onClick={() => setLocation(item)}
                                  id={`${item.id}-option`}
                                  style={{
                                    display: !showSelect2 && "none",
                                    borderBottom: i === a.length - 1 && "none",
                                  }}
                                >
                                  {item?.name}
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className='label-contact'>
                    Form of Payment<span className='star'>*</span>
                  </div>
                  <div
                    className='errormsg'
                    style={{ display: paymentTypeError ? "" : "none" }}
                  >
                    Please Select
                  </div>
                  <div className='radio-container'>
                    <input
                      type='radio'
                      onClick={() => setPaymentType("card")}
                      name='paymenttype'
                      id='card'
                    />
                    <label className='mleft10' htmlFor='card'>
                      Card Swipe
                    </label>
                  </div>

                  <div className='radio-container'>
                    <input
                      type='radio'
                      onClick={() => setPaymentType("mobilewallet")}
                      name='paymenttype'
                      id='mobilewallet'
                    />
                    <label className='mleft10' htmlFor='mobilewallet'>
                      Mobile Wallet (Google Pay, Apple Pay, etc)
                    </label>
                  </div>
                  <div className='radio-container'>
                    <input
                      type='radio'
                      onClick={() => setPaymentType("cash")}
                      name='paymenttype'
                      id='cash'
                    />
                    <label className='mleft10' htmlFor='cash'>
                      Cash
                    </label>
                  </div>

                  {paymentType === "card" ? (
                    <div style={{ marginTop: "10px" }}>
                      <label htmlFor='name-contact' className='label-contact'>
                        Last 4 Digits of Card<span className='star'>*</span>
                      </label>
                      {last4Error && (
                        <div
                          className='errormsg'
                          style={{ display: last4Error ? "" : "none" }}
                        >
                          Missing 4 digits!
                        </div>
                      )}
                      <input
                        className='input-contact'
                        value={last4}
                        onChange={(e) => setLast4(e.target.value)}
                        maxLength={4}
                        type='text'
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )}

              <div
                id='textarea-container'
                style={{ marginTop: reason === "question" ? 0 : "15px" }}
              >
                <label htmlFor='name-contact' className='label-contact'>
                  {reason === "question/suggestion"
                    ? "Your Question/Suggestion Below"
                    : "Please describe the issue"}
                  <span className='star'>*</span>
                </label>
                {descError && (
                  <div
                    className='errormsg'
                    style={{ display: descError ? "" : "none" }}
                  >
                    Missing description!
                  </div>
                )}
                <textarea
                  className='tarea-contact'
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  style={{ marginTop: "5px" }}
                  type='text'
                />
              </div>

              <button type='submit' className='submitbut-contact'>
                Submit
              </button>
            </form>

            {/* {submitting && (
              <div className='lds-ring nodisplay' id='spinner-form'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )} */}
          </div>
        ) : (
          <div className='ty-message'>
            Thank you, your message has been received.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
