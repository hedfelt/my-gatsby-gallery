import React from "react";
import { Link } from "gatsby";
import * as styles from "./ReturnLink.module.scss";

export default function ReturnLink({ to, children }) {
  return (
    <Link className={styles.link} to={to}>
      {children}
    </Link>
  );
}
