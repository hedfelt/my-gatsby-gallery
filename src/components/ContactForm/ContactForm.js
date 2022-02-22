import React, { useState } from "react";

import * as styles from "./ContactForm.module.scss";

export default function ContactForm({ onFormSubmit }) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() != "";
  const enteredEmailIsValid =
    enteredEmail.includes("@") && enteredEmail.trim() != "";
  const enteredMessageIsValid = enteredMessage.trim() != "";

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const messageInputIsInvalid = !enteredMessageIsValid && enteredMessageTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };
  const messageInputBlurHandler = (event) => {
    setEnteredMessageTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredMessageTouched(true);

    if (!enteredNameIsValid || !enteredEmail || !enteredMessage) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
    setEnteredMessage("");
    setEnteredMessageTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? styles.form__input__invalid
    : styles.form__input;

  const emailInputClasses = emailInputIsInvalid
    ? styles.form__input__invalid
    : styles.form__input;

  const messageInputClasses = messageInputIsInvalid
    ? styles.form__input__invalid
    : styles.form__input;

  return (
    <form className={styles.form} onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">NAME</label>
        <input
          placeholder="Full Name"
          type="text"
          id="name"
          name="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className={styles.form__error}>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">EMAIL</label>
        <input
          placeholder="Your Email"
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className={styles.form__error}>Please enter a valid email.</p>
        )}
      </div>

      <div className={messageInputClasses}>
        <label>MESSAGE</label>
        <textarea
          placeholder="Your Message"
          onChange={messageInputChangeHandler}
          value={enteredMessage}
          onBlur={messageInputBlurHandler}
        ></textarea>
        {messageInputIsInvalid && (
          <p className={styles.form__error}>Message must not be empty.</p>
        )}
      </div>
      <button
        className={styles.form__button}
        type="submit"
        disabled={!formIsValid}
      >
        SUBMIT
      </button>
    </form>
  );
}
