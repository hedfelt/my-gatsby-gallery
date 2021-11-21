import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/contact.module.scss";
import ContactForm from "../components/ContactForm/ContactForm";
import { motion } from "framer-motion";

const ContactPage = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
  const contactMotion = {
    initial: {
      x: 0,
    },
    animate: {
      x: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };
  const letter = {
    initial: {
      x: -180,
    },
    animate: {
      x: -35,
      transition: { duration: 1, ...transition },
    },
  };
  return (
    <motion.div initial="initial" animate="animate" className={styles.contact}>
      <div className={styles.contact__topbox}>
        <div className={styles.contact__topbox1}></div>
        <div className={styles.contact__topbox2}></div>
        <div className={styles.contact__topbox3}></div>
      </div>
      <div className={styles.contact__mainbox}>
        <motion.div className={styles.contact__leftbox}>
          <motion.span
            className={styles.contact__bottombox}
            variants={contactMotion}
          >
            <motion.span variants={letter}>C</motion.span>
            <motion.span variants={letter}>O</motion.span>
            <motion.span variants={letter}>N</motion.span>
            <motion.span variants={letter}>T</motion.span>
            <motion.span variants={letter}>A</motion.span>
            <motion.span variants={letter}>C</motion.span>
            <motion.span variants={letter}>T</motion.span>
          </motion.span>
          <div className={styles.contact__cornerbox}></div>
        </motion.div>

        <div className={styles.contact__box}>
          <div>
            <div className={styles.contact__header}>Want to contact</div>
            <div className={styles.contact__header}>me?</div>

            <div className={styles.contact__subheader}>
              <div>Fill in the contact form and I will be in touch with</div>
              <div>you shortly!</div>
            </div>

            <div className={styles.contact__form}>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className={styles.contact__rightbox}></div>
      </div>
    </motion.div>
  );
};
export default ContactPage;
