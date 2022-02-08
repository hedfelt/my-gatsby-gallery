import React, { useState } from "react";

import * as styles from "./ContactForm.module.scss";

export default function ContactForm({ onFormSubmit }) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() == "") {
      setEnteredNameIsValid(false);
    }
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() == "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // styling
  // const nameInputClasses = enteredNameIsValid
  //   ? styles.form__input__invalid
  //   : styles.form__input;

  return (
    <form className={styles.form} onSubmit={formSubmissionHandler}>
      <div className={styles.form__inputwrapper}>
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
          <p className={styles.form__error}>Name must not be empty</p>
        )}
      </div>
      <div className={styles.form__inputwrapper}>
        <label htmlFor="email">EMAIL</label>
        <input
          placeholder="Your Email"
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
        />
      </div>

      <div className={styles.form__inputwrapper}>
        <label>MESSAGE</label>
        <textarea
          className={styles.form__textarea}
          placeholder="Your Message"
          maxlenght="500"
          onChange={messageInputChangeHandler}
          value={enteredMessage}
        ></textarea>
        {enteredMessage != "" ? (
          <div>{`* ${500 - enteredMessage.length} letters left`}</div>
        ) : (
          <div>{"* 500 letters left"}</div>
        )}
      </div>
      <button className={styles.form__button} type="submit">
        SUBMIT
      </button>
    </form>
  );
}
