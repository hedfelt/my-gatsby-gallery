import * as React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import * as styles from "../styles/contact.module.scss";

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__leftWrapper}></div>
      <div className={styles.contact__rightWrapper}>
        <h1 className={styles.contact__header}>CONTACT ME</h1>
        <ContactForm />
      </div>
    </div>
  );
}
