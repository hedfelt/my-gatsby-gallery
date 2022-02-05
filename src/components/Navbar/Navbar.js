import React, { useState, useEffect } from "react";
import * as styles from "./Navbar.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";
import { NavbarItem } from "../NavbarItem/NavbarItem";

export default function Navbar({ showModal, iconChange }) {
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 4,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -4,
    },
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>HANNE EDFELT</div>

      <motion.div className={styles.navbar__button} onClick={iconChange}>
        <motion.div
          className={styles.navbar__bar}
          variants={top}
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
    </nav>
  );
}
