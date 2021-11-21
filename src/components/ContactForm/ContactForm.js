import React from "react";

import "./ContactForm.scss";
import useInput from "../../hooks/useInput";
import { motion } from "framer-motion";

const ContactForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";

  const isEmail = (value) => value.includes("@");

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  //overall form validity:

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  //form submission

  const formSubmissionHandler = (event) => {
    //if a form is submitted with a button an http request is sent to the server serving the website automatically and the page will be reloaded and we will lose our state. In this case we dont have a server that can handle that, and we dont want to reload, we are using firestone instead.  We stop that default behavior by writing:
    event.preventDefault();

    //checking if the input is empty. If empty, return, stops the function and the code beneath is not executed:

    //(this is not really nesearry becuase the button is disabled)
    if (!formIsValid) {
      return; //cancels the function
    }

    resetNameInput();
    resetEmailInput();
    resetMessageInput();

    const data = {
      firstName: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };
    fetch("https://gallery-f98d4-default-rtdb.firebaseio.com/artform.json", {
      method: "POST",
      body: JSON.stringify({ data }),
    });
  };

  //classes:

  const nameInputClasses = nameInputHasError
    ? "form__input form__input--invalid"
    : "form__input";

  const emailInputClasses = emailInputHasError
    ? "form__input form__input--invalid"
    : "form__input";

  const messageInputClasses = messageInputHasError
    ? " form__input form__input--invalid"
    : "form__input";

  return (
    <form className="form" onSubmit={formSubmissionHandler}>
      <div>
        {/* <label htmlFor="firstname" className="form__label">
            first name
          </label> */}
        <input
          placeholder="Name"
          className={nameInputClasses}
          type="text"
          id="firstname"
          name="firstname"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />

        {nameInputHasError ? (
          <p className="form__message--error">First name must not be empty</p>
        ) : (
          <div className="form__message"></div>
        )}
      </div>
      <div>
        {/* <label htmlFor="email" className="form__label">
          email
        </label> */}
        <input
          placeholder="Email"
          className={emailInputClasses}
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />

        {emailInputHasError ? (
          <p className="form__message--error">Please enter a valid email</p>
        ) : (
          <div className="form__message"></div>
        )}
      </div>

      <div>
        <textarea
          style={{
            fontFamily: "Open Sans",
            height: "10rem",
          }}
          placeholder="Message"
          className={messageInputClasses}
          maxlenght="500"
          onChange={messageChangedHandler}
          onBlur={messageBlurHandler}
          value={enteredMessage}
        ></textarea>
        {messageInputHasError ? (
          <p className="form__message--error">Message must not be empty</p>
        ) : (
          <div className="form__message"></div>
        )}
      </div>
      <motion.button
        className="form__button"
        type="submit"
        disabled={!formIsValid}
        onClick={() => props.clickedForm()}
        whileTap={{ scale: 1 }}
        whileHover={{ backgroundColor: "#000", color: "#FFFF" }}
      >
        SEND
      </motion.button>
    </form>
  );
};

export default ContactForm;
