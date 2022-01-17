import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./NavbarItem.module.scss";

export const NavbarItem = ({ item, color }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      {item == "HANNE EDFELT" ? (
        <li className={styles.navbar__logo}>
          <div style={{ color: color }}>HANNE EDFELT</div>
        </li>
      ) : (
        <li key={item} className={styles.navbar__item}>
          <Link
            to={item === "home" ? "/" : "/" + item}
            className={styles.navbar__link}
            style={{ color: color }}
            activeClassName={styles.navbar__activelink}
            activeStyle={{ color: color }}
          >
            {item}
          </Link>
          <Link
            to={item === "home" ? "/" : "/" + item}
            activeClassName={styles.navbar__activeline}
            activeStyle={{ backgroundColor: color }}
          ></Link>
        </li>
      )}
    </>
  );
};
