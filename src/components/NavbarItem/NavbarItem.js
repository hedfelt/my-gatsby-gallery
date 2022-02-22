import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import * as styles from "./NavbarItem.module.scss";
import { motion } from "framer-motion";

export default function NavbarItem({ item, iconChange }) {
  return (
    <motion.li
      whileHover={{ skewX: "10deg", scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={iconChange}
      className={styles.navbaritem}
    >
      <Link
        to={item === "home" ? "/" : "/" + item}
        className={styles.navbaritem__link}
        activeClassName={styles.navbaritem__activelink}
      >
        {item}
      </Link>
    </motion.li>
  );
}
