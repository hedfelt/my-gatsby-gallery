import React, { useState, useEffect } from "react";
import * as styles from "./Navbar.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";

export default function Navbar({ showModal, iconChange }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
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
      {(toggleMenu || screenWidth > 500) && (
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <Link to="/">HOME</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li className={`${styles.navbar__item} ${styles.navbar__logo}`}>
            HANNE EDFELT
          </li>
          <li className={styles.navbar__item}>
            <Link to="/news">NEWS</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      )}

      <div className="navbar__button" onClick={toggleNav}>
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
        <div className={styles.navbar__smallscreen}>HANNE EDFELT</div>
      </div>
    </nav>
  );
}
