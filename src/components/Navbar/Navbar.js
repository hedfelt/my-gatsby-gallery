import React, { useState, useEffect } from "react";
import * as navbar from "./Navbar.scss";
import { motion } from "framer-motion";
import NavbarIcon from "../../UI/NavbarIcon/NavbarIcon";
import { Link } from "gatsby";
import Logo from "../../UI/Logo/Logo";

const Navbar = ({ showModal, iconChange }) => {
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 6,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -6,
    },
  };

  return (
    <nav
      className={showModal ? "navbar navbar--closed" : "navbar navbar--open"}
    >
      <div className="navbar__iconWrapper navbar__box">
        <motion.div className="navbar__hamburger" onClick={iconChange}>
          <motion.div
            className="navbar__upperbar"
            variants={top}
            initial={showModal ? "closed" : "open"}
            animate={showModal ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className="navbar__lowerbar"
            variants={bottom}
            initial={showModal ? "closed" : "open"}
            animate={showModal ? "opened" : "closed"}
          ></motion.div>
        </motion.div>
        <div className={showModal ? "navbar__open" : "navbar__closed"}>
          {showModal ? "CLOSE" : "MENU"}
        </div>
      </div>
      <div className="navbar__nameGroup">
        <div className="navbar__name">HANNE</div>
        <div className="navbar__name">EDFELT</div>
        <div>STUDIO</div>
      </div>
      <div className="navbar__box"></div>
    </nav>
  );
};

export default Navbar;
