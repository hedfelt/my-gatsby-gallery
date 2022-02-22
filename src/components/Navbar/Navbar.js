import React, { useState, useEffect } from "react";
import * as styles from "./Navbar.module.scss";
import { motion } from "framer-motion";

export default function Navbar({ showModal, iconChange }) {
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
      opacity: 1,
      backgroundColor: "#000",
    },
    opened: {
      rotate: 45,
      translateY: 9.5,
      backgroundColor: "#FFF",
      opacity: 1,
    },
  };
  const middle = {
    closed: {
      opacity: 1,
      backgroundColor: "#000",
      transition: { duration: 0.1, delay: 0.3 },
    },
    opened: {
      opacity: 0,
      backgroundColor: "#FFF",
      transition: { duration: 0, delay: 0 },
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
      backgroundColor: "#000",
      opacity: 1,
    },
    opened: {
      rotate: -45,
      translateY: -9.5,
      backgroundColor: "#FFF",
      opacity: 1,
    },
  };

  const variantsLogo = {
    open: { color: "#FFF", opacity: 1 },
    closed: { color: "#000", opacity: 1 },
  };

  const logoStyle = showModal
    ? `${styles.navbar__logo} ${styles.navbar__logoOpen}`
    : styles.navbar__logo;

  const barStyle = showModal
    ? `${styles.navbar__bar} ${styles.navbar__barOpen}`
    : styles.navbar__bar;

  return (
    <motion.nav className={styles.navbar}>
      <motion.div
        variants={variantsLogo}
        initial={showModal ? "closed" : "open"}
        animate={showModal ? "opened" : "closed"}
        className={styles.navbar__logo}
      >
        <div>HANNE</div>
        <div>EDFELT</div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 0.9 }}
        className={styles.navbar__button}
        onClick={iconChange}
      >
        <motion.div
          className={styles.navbar__bar}
          variants={top}
          initial={showModal ? "closed" : "open"}
          animate={showModal ? "opened" : "closed"}
        ></motion.div>
        <motion.div
          className={styles.navbar__bar}
          variants={middle}
          transition={{ duration: 0 }}
          initial={showModal ? "closed" : "open"}
          animate={showModal ? "opened" : "closed"}
        ></motion.div>
        <motion.div
          className={styles.navbar__bar}
          variants={bottom}
          initial={showModal ? "closed" : "open"}
          animate={showModal ? "opened" : "closed"}
        ></motion.div>
      </motion.div>
    </motion.nav>
  );
}
