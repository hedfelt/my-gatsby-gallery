import React, { useState } from "react";

import * as styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredName("");
    setEnteredMail("");
    setEnteredMessage("");
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.form__inputwrapper}>
        <label className={styles.form__label} htmlFor="name">
          NAME
        </label>
        <input
          className={styles.form__input}
          placeholder="Full Name"
          type="text"
          id="name"
          name="name"
          required="required"
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      <div className={styles.form__inputwrapper}>
        <label className={styles.form__label} htmlFor="email">
          EMAIL
        </label>
        <input
          className={styles.form__input}
          placeholder="Your Email"
          type="email"
          id="email"
        />
      </div>

      <div className={styles.form__inputwrapper}>
        <label className={styles.form__label}>MESSAGE</label>
        <textarea
          style={{ height: "10rem" }}
          className={styles.form__input}
          placeholder="Your Message"
          maxlenght="500"
        ></textarea>
      </div>
      <button className={styles.form__button} type="submit">
        SUBMIT
      </button>
    </form>
  );
}
