import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import * as styles from "./NavbarItem.module.scss";

export default function NavbarItem({ item, iconChange }) {
  return (
    <li onClick={iconChange} className={styles.navbaritem}>
      <Link
        to={item === "home" ? "/" : "/" + item}
        className={styles.navbaritem__link}
        activeClassName={styles.navbaritem__activelink}
      >
        {item}
      </Link>
    </li>
  );
}
