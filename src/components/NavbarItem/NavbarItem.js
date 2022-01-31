import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import * as styles from "./NavbarItem.module.scss";

export const NavbarItem = ({ item, color, scrolling }) => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <>
      {item == "HANNE EDFELT" ? (
        <div
          style={{ color: scrolling ? "white" : color }}
          className={styles.navbar__logo}
        >
          <div>HANNE</div>
          <div>EDFELT</div>
        </div>
      ) : (
        <li onClick={clickHandler} key={item} className={styles.navbar__item}>
          <Link
            to={item === "home" ? "/" : "/" + item}
            className={styles.navbar__link}
            style={{ color: scrolling ? "white" : color }}
            activeClassName={styles.navbar__activelink}
            activeStyle={{ color: scrolling ? "white" : color }}
          >
            {item}
          </Link>
          <div
            className={styles.navbar__hoverline}
            style={{ backgroundColor: color }}
          ></div>
        </li>
      )}
    </>
  );
};
