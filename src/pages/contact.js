import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/contact.module.scss";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__header}>
          Hello. Do you have <br /> any questions?
          <br /> Leave me a <br />
          message.
        </div>
        <div className={styles.contact__subheader}>
          Feel free to ask me anything if you have any questions. Just fill in
          the form
          <br /> and I will get in touch with you shortly.
        </div>
      </div>
      <div className={styles.contact__form}>
        <ContactForm
        // clickedForm={(clickedButton) => setClickedButton(!clickedButton)}
        />
        {/* CONTACTFORM */}
      </div>

      {/* {clickedButton && (
          <FormModal clickedModal={() => setClickedButton(!clickedButton)} />
        )} */}
    </div>
  );
};
export default ContactPage;
