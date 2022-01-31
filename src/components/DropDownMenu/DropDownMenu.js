import React, { useState, useEffect, useRef } from "react";
import * as styles from "./DropDownMenu.module.scss";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

export default function DropDownMenu({ title, options }) {
  const [showOptions, setShowOptions] = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();

  const clickOptionsHandler = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleOutsideClicks);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleOutsideClicks);
    };
  }, [menuOpen]);

  //create a function in your component to handleOutsideClicks
  const handleOutsideClicks = (event) => {
    if (
      menuOpen &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
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
    <motion.div ref={menuRef} className={styles.dropdown}>
      <motion.div
        whileHover="hover"
        className={styles.dropdown__wrapper}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <button
          className={styles.dropdown__header}
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <legend>{title}</legend>
          <motion.div className={styles.dropdown__arrow} aria-hidden="true">
            {arrow_variants.map((variant) => (
              <motion.div
                key={variant}
                className={styles.dropdown__bar}
                variants={variant}
                initial={menuOpen ? "closed" : "open"}
                animate={menuOpen ? "opened" : "closed"}
              ></motion.div>
            ))}
          </motion.div>
        </button>

        {menuOpen && (
          <motion.div
            layoutId="underline"
            animate
            className={styles.dropdown__underline}
            style={{ backgroundColor: "green" }}
          ></motion.div>
        )}
      </motion.div>
      {/* <AnimatePresence>
        {menuOpen && (
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
      </AnimatePresence> */}
    </motion.div>
  );
}
