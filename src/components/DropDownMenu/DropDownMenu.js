import React, { useState, useEffect, useRef } from "react";
import * as styles from "./DropDownMenu.module.scss";
import { motion } from "framer-motion";

export default function DropDownMenu({ title, options }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClicks);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClicks);
    };
  }, [menuOpen]);

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
    </motion.div>
  );
}
