import React, { useState } from "react";

import * as styles from "./ContactForm.module.scss";

export default function ContactForm({ onFormSubmit }) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0) {
      return;
    }

    console.log(enteredName, enteredEmail, enteredMessage);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");
    onFormSubmit();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.form__inputwrapper}>
        <label htmlFor="name">NAME</label>
        <input
          placeholder="Full Name"
          type="text"
          id="name"
          name="name"
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      <div className={styles.form__inputwrapper}>
        <label htmlFor="email">EMAIL</label>
        <input
          placeholder="Your Email"
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
      </div>

      <div className={styles.form__inputwrapper}>
        <label>MESSAGE</label>
        <textarea
          className={styles.form__textarea}
          placeholder="Your Message"
          maxlenght="500"
          value={enteredMessage}
          onChange={messageChangeHandler}
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
