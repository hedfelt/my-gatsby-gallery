import React, { useState, useEffect } from "react";
import * as styles from "./Navbar.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";
import { NavbarItem } from "../NavbarItem/NavbarItem";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

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
      <div className={styles.navbar__logo}>
        HANNE <br />
        EDFELT
      </div>

      <motion.div className={styles.navbar__button} onClick={toggleNav}>
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
    </nav>
  );
}
