import React, { useState, useEffect } from "react";
import * as navbar from "./Navbar.scss";
import { motion } from "framer-motion";
import NavbarIcon from "../../UI/NavbarIcon/NavbarIcon";
import { Link } from "gatsby";
import Logo from "../../UI/Logo/Logo";

const Navbar = ({ showModal, iconChange }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

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
      style={{ top: visible ? "0" : "-150px" }}
      className={showModal ? "navbar navbar--closed" : "navbar navbar--open"}
    >
      <div className={showModal ? "navbar__name--open" : "navbar__name"}>
        <Logo fill={"black"} />
      </div>

      <div className="navbar__iconWrapper">
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
        <div className=""> Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;
