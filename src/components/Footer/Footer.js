import React from "react";
import "./Footer.scss";
import { motion } from "framer-motion";
import Icons from "../../UI/Icons/Icons";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div className="footer" data-scroll-section>
      <div className="footer__icons">
        FOLLOW ME
        <Icons />
      </div>
      <div className="footer__links">
        <motion.div whileHover={{ scale: 1.3 }}>
          <Link className="footer__home" to="/">
            HOME
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <Link className="footer__about" to="/about">
            ABOUT
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <Link className="footer__works" to="/artworks">
            ARTWORKS
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <Link className="footer__contact" to="/contact">
            CONTACT
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
