import React from "react";
import * as styles from "./Navbar.module.scss";
import { motion } from "framer-motion";

export default function Navbar({ showModal, iconChange }) {
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
      opacity: 1,
      height: "0.15rem",
    },
    opened: {
      rotate: 45,
      translateY: 3.5,
      opacity: 1,
      height: "0.15rem",
    },
  };

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
      opacity: 1,
      width: "1.8rem",
      height: "0.20rem",
    },
    opened: {
      rotate: -45,
      translateY: -3.5,
      opacity: 1,
      width: "2.5rem",
      height: "0.15rem",
    },
  };

  return (
    <motion.div className={styles.navbar}>
      <motion.div className={styles.navbar__logo}>
        <div>HANNE EDFELT</div>
        <div>STUDIO</div>
      </motion.div>
      <nav aria-labelledby="hamburger" role="navigation" aria-label="Main menu">
        <motion.button
          id="hamburger"
          tabIndex={0}
          className={styles.navbar__button}
          onClick={iconChange}
          aria-label={
            showModal ? "Hide Navigation Menu" : "Show Navigation Menu"
          }
          aria-expanded={showModal ? "true" : "false"}
        >
          <motion.div
            className={styles.navbar__upperbar}
            variants={top}
            initial={showModal ? "closed" : "open"}
            animate={showModal ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className={styles.navbar__lowerbar}
            variants={bottom}
            initial={showModal ? "closed" : "open"}
            animate={showModal ? "opened" : "closed"}
          ></motion.div>
        </motion.button>
      </nav>
    </motion.div>
  );
}
