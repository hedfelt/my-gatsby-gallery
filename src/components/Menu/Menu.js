import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import * as styles from "./Menu.module.scss";

export default function Menu({ items, onCheckedValue, checkedValues }) {
  const [selectedTab, setSelectedTab] = useState(null);

  const options = items.map((item) => item.type);

  const menuRef = useRef();

  const clickHandler = (item) => {
    if (item === selectedTab) {
      setSelectedTab(null);
    } else {
      setSelectedTab(item);
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setSelectedTab(null);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [menuRef]);

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

  const arrow_variants = [top, bottom];

  return (
    <div ref={menuRef}>
      <nav className={styles.filter}>
        <ul>
          {uniqOptions.map((item) => (
            <motion.li
              key={item.name}
              className={styles.filter__navbox}
              onClick={() => clickHandler(item)}
            >
              {item}
              <motion.div className={styles.filter__arrow} aria-hidden="true">
                {arrow_variants.map((variant) => (
                  <motion.div
                    key={variant}
                    className={styles.filter__bar}
                    variants={variant}
                    initial={item === selectedTab ? "closed" : "open"}
                    animate={item === selectedTab ? "opened" : "closed"}
                  ></motion.div>
                ))}
              </motion.div>
              {item === selectedTab && (
                <motion.div
                  className={styles.filter__underline}
                  layoutId="underline"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
      <AnimatePresence exitBeforeEnter>
        <motion.div layoutId="box" className={styles.filter__dropdown}>
          <div className={styles.filter__box}>
            {items.map((item) => {
              return (
                <motion.div key={item.id}>
                  {item.type === selectedTab && (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      className={styles.filter__option}
                    >
                      <input
                        value={item.name}
                        name={item.name}
                        type="checkbox"
                        id={item.name}
                        onClick={onCheckedValue}
                        checked={checkedValues.includes(item.name)}
                      />
                      <label htmlFor={item.name}>{item.name}</label>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
