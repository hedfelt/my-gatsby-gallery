import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import * as styles from "./Menu.module.scss";
import { graphql } from "gatsby";

export default function Menu({ items }) {
  const options = ["Color", "Size", "Medium"];
  const [selectedTab, setSelectedTab] = useState(options[0]);

  // name type

  return (
    <div className={styles.menu}>
      <nav>
        <ul>
          {items.map((item) => (
            <li
              key={item.name}
              className={item.type === selectedTab ? styles.menu__selected : ""}
              onClick={() => setSelectedTab(item.type)}
            >
              {item.type}
              {item.type === selectedTab ? (
                <motion.div
                  className={styles.menu__underline}
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {items.map((item) => {
              return (
                <div key={item.id}>
                  {item.type === selectedTab ? item.name : ""}
                </div>
              );
            })}
            {/* {selectedTab
              ? items.map((item, index) => {
                  return (
                    <ul key={index}>
                      {item.type == selectedTab &&
                        item.name.map((subitem, i) => {
                          return (
                            <div
                              key={subitem}
                              className={styles.dropdown__checkboxcontainer}
                            >
                              <input type="checkbox" id={subitem} />
                              <label htmlFor={subitem}>{subitem}</label>
                            </div>
                          );
                        })}
                    </ul>
                  );
                })
              : ""} */}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/* <AnimatePresence>
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
        </AnimatePresence> */
/* </main> */
