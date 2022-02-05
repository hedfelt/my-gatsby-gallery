import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import * as styles from "./Menu.module.scss";

export default function Menu({ items, onCheckedValue, checkedValues }) {
  const [selectedTab, setSelectedTab] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

  const options = items.map((item) => item.type);

  const menuRef = useRef();

  const clickOptionsHandler = () => {
    setShowOptions(!showOptions);
  };

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

  const uniqOptions = [...new Set(options)];
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

  const clickHandler = (item) => {
    setMenuOpen(!menuOpen);
    setSelectedTab(item);
  };

  const arrow_variants = [top, bottom];

  return (
    <>
      <nav className={styles.filter}>
        <ul>
          {uniqOptions.map((item) => (
            <li
              key={item.name}
              className={
                item.type === selectedTab
                  ? styles.filter__selected
                  : styles.filter__unSelected
              }
              onClick={() => clickHandler(item)}
            >
              {item}
              <motion.div className={styles.filter__arrow} aria-hidden="true">
                {arrow_variants.map((variant) => (
                  <motion.div
                    key={variant}
                    className={styles.filter__bar}
                    variants={variant}
                    initial={menuOpen ? "closed" : "open"}
                    animate={menuOpen ? "opened" : "closed"}
                  ></motion.div>
                ))}
              </motion.div>
              {item === selectedTab ? (
                <motion.div
                  className={styles.filter__underline}
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.filter__dropdown}>
        <AnimatePresence exitBeforeEnter>
          <div
            key={selectedTab ? selectedTab : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            className={styles.filter__list}
          >
            {items.map((item) => {
              return (
                <div key={item.id}>
                  {item.type === selectedTab && (
                    <div key={item.name} className={styles.filter__option}>
                      <input
                        value={item.name}
                        name={item.name}
                        type="checkbox"
                        id={item.name}
                        onClick={onCheckedValue}
                        checked={checkedValues.includes(item.name)}
                      />
                      <label htmlFor={item.name}>{item.name}</label>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
    </>
  );
}
