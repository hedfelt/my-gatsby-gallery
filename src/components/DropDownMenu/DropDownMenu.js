import React, { useState } from "react";
import * as styles from "./DropDownMenu.module.scss";
import { AnimatePresence, motion } from "framer-motion";

export default function DropDownMenu({ title, options }) {
  const [showOptions, setShowOptions] = useState(false);

  const clickOptionsHandler = () => {
    setShowOptions(!showOptions);
  };

  const top = {
    closed: {
      rotate: -45,
      translateX: "-0.07rem",
    },
    opened: {
      rotate: 45,
      translateX: "-0.07rem",
    },
    transition: {
      duration: 0.7,
    },
  };
  const bottom = {
    closed: {
      rotate: 45,
      translateX: "0.07rem",
    },
    opened: {
      rotate: -45,
      translateX: "0.07rem",
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
        <div className={styles.dropwdown__title}>{title}</div>

        <motion.div className={styles.dropdown__arrow}>
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
      </motion.div>
      <AnimatePresence>
        {showOptions && (
          <motion.div
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
