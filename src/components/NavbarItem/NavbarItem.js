import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import * as styles from "./NavbarItem.module.scss";

export const NavbarItem = ({ item }) => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <>
      <li onClick={clickHandler} className={styles.navbar__item}>
        <Link
          to={item === "home" ? "/" : "/" + item}
          className={styles.navbar__link}
          activeClassName={styles.navbar__activelink}
        >
          {item}
        </Link>
        <div className={styles.navbar__hoverline}></div>
      </li>
    </>
  );
};
