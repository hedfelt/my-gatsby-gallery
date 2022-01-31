import React, { useState, useEffect } from "react";
import * as styles from "./Navbar.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";
import { NavbarItem } from "../NavbarItem/NavbarItem";

export default function Navbar({ color }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeScroll, setActiveScroll] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 90) {
        setActiveScroll(true);
      } else {
        setActiveScroll(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [setActiveScroll]);

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

  const navbarItems = ["home", "gallery", "HANNE EDFELT", "news", "contact"];
  return (
    <nav className={styles.navbar}>
      <div
        className={
          activeScroll
            ? styles.navbar__activescrollbar
            : styles.navbar__unactivescrollbar
        }
      >
        {(toggleMenu || screenWidth > 500) && (
          <ul className={styles.navbar__list}>
            {navbarItems.map((item) => (
              <NavbarItem
                scrolling={activeScroll}
                key={item}
                item={item}
                color={color}
              />
            ))}
          </ul>
        )}
        <div className="navbar__button" onClick={toggleNav}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={styles.navbar__button}
            onClick={toggleNav}
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
      </div>
    </nav>
  );
}
