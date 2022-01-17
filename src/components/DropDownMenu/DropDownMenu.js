import React, { useState } from "react";
import * as styles from "./DropDownMenu.module.scss";
import { AnimatePresence, motion } from "framer-motion";

export default function DropDownMenu({ title, options, color }) {
  const [showOptions, setShowOptions] = useState(false);

  const clickOptionsHandler = () => {
    setShowOptions(!showOptions);
  };

  const top = {
    closed: {
      rotate: -50,
      translateX: "-0.1rem",
    },
    opened: {
      rotate: -130,
      translateX: "-0.1rem",
    },
    transition: {
      duration: 0.7,
    },
  };
  const bottom = {
    closed: {
      rotate: 50,
      translateX: "0.1rem",
    },
    opened: {
      rotate: 130,
      translateX: "0.1rem",
    },
  };

  const containerVariant = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { delayChildren: 0.1, when: "afterChildren" },
    },
    show: {
      opacity: 1,
      height: "auto",
      transition: { delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const arrow_variants = [top, bottom];
  return (
    <div className={styles.dropdown}>
      <motion.div
        whileHover="hover"
        className={styles.dropdown__wrapper}
        onClick={clickOptionsHandler}
      >
        <button
          className={styles.dropdown__header}
          aria-expanded={showOptions ? "true" : "false"}
        >
          <legend>{title}</legend>
          <motion.div className={styles.dropdown__arrow} aria-hidden="true">
            {arrow_variants.map((variant) => (
              <motion.div
                key={variant}
                className={styles.dropdown__bar}
                variants={variant}
                initial={showOptions ? "closed" : "open"}
                animate={showOptions ? "opened" : "closed"}
              ></motion.div>
            ))}
          </motion.div>
        </button>
        <div className={styles.dropdown__color}></div>
      </motion.div>
      <AnimatePresence>
        {showOptions && (
          <motion.fieldset
            className={styles.dropdown__options}
            variants={containerVariant}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {options.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item}
                className={styles.dropdown__checkboxcontainer}
              >
                <input type="checkbox" id={item} />
                <label htmlFor={item}>{item}</label>
              </motion.div>
            ))}
          </motion.fieldset>
        )}
      </AnimatePresence>
    </div>
  );
}
