import React, { useState } from "react";

import "./ContactForm.scss";

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
    <form className="form" onSubmit={submitHandler}>
      <div>
        <label htmlFor="name" className="form__label">
          name
        </label>
        <input
          placeholder="name"
          type="text"
          id="name"
          name="name"
          required="required"
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      <div>
        <label htmlFor="email" className="form__label">
          email
        </label>
        <input placeholder="Email" type="email" id="email" />
      </div>

      <div>
        <label>message</label>
        <textarea placeholder="Message" maxlenght="500"></textarea>
      </div>
      <button className="form__button" type="submit">
        SEND
      </button>
    </form>
  );
}
