import React, { useState, useEffect } from "react";
import * as styles from "./Navbar.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";
import { NavbarItem } from "../NavbarItem/NavbarItem";

export default function Navbar({ color }) {
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

  const navbarItems = ["home", "gallery", "news", "contact"];

  return (
    <nav className={styles.navbar}>
      <div className="navbar__button">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={styles.navbar__button}
        >
          <motion.div
            className={styles.navbar__bar}
            variants={top}
            initial={toggleMenu ? "closed" : "open"}
            animate={toggleMenu ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className={styles.navbar__bar}
            variants={bottom}
            initial={toggleMenu ? "closed" : "open"}
            animate={toggleMenu ? "opened" : "closed"}
          ></motion.div>
        </motion.div>
        <div className={styles.navbar__smallscreen}>
          <div>HANNE</div>
          <div>EDFELT</div>
        </div>
      </div>
    </nav>
  );
}
