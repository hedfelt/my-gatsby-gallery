import React, { useState } from "react";
import * as styles from "./DropDownMenu.module.scss";
import { motion } from "framer-motion";

export default function DropDownMenu({ title, options }) {
  const [showOptions, setShowOptions] = useState(false);

  const clickOptionsHandler = () => {
    setShowOptions(!showOptions);
  };
  const top = {
    closed: {
      rotate: 45,
      translateX: "0.7rem",
    },
    opened: {
      rotate: -45,
      translateX: "0.7rem",
    },
    transition: {
      duration: 0.7,
    },
  };
  const bottom = {
    closed: {
      rotate: -45,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 0,
    },
  };
  return (
    <div className={styles.dropdown}>
      <div>
        <div
          className={styles.dropdown__itemheader}
          onClick={clickOptionsHandler}
        >
          <div className={styles.dropdown__title}>{title}</div>
          <div className={styles.dropdown__arrow}>
            <motion.div
              className={styles.dropdown__upperbar}
              variants={top}
              initial={showOptions ? "closed" : "open"}
              animate={showOptions ? "opened" : "closed"}
            ></motion.div>
            <motion.div
              className={styles.dropdown__lowerbar}
              variants={bottom}
              initial={showOptions ? "closed" : "open"}
              animate={showOptions ? "opened" : "closed"}
            ></motion.div>
          </div>
        </div>
        {showOptions && (
          <ul className={styles.dropdown__dropdownlist}>
            {options.map((item) => (
              <li key={item} className={styles.dropdown__checkboxcontainer}>
                <input
                  type="checkbox"
                  id={item}
                  className={styles.dropdown__input}
                />
                <label htmlFor={item} className={styles.dropdown__label}>
                  {item}
                </label>
                <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
