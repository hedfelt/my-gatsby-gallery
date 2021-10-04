import React from "react";
import * as navbar from "./Navbar.scss";
import { motion } from "framer-motion";
import NavbarIcon from "../../UI/NavbarIcon/NavbarIcon";
import { Link } from "gatsby";

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
      <div className={showModal ? "navbar__name--open" : "navbar__name"}>
        H--E
      </div>

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
      <div className="navbar__iconWrapper">
        <Link to="/" onClick={showModal ? iconChange : null}>
          <NavbarIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
