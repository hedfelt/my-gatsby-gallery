import React, { useEffect, useState } from "react";
import * as styles from "./Modal.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import NavbarItem from "../NavbarItem/NavbarItem";

export default function Modal({ showModal, iconChange }) {
  const navigationList = ["home", "gallery", "news", "contact"];

  const container = {
    hidden: {
      opacity: 1,
      height: 0,
      transition: {
        ease: "circOut",
        when: "afterChildren",
        duration: 0.3,
      },
    },
    show: {
      opacity: 1,
      height: "100vh",
      transition: {
        ease: "circOut",
        duration: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  return createPortal(
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className={styles.modal}
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.ul
            key="modal_list"
            className={styles.modal__list}
            variants={item}
          >
            {navigationList.map((item) => (
              <NavbarItem iconChange={iconChange} item={item} key={item} />
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>,

    document.getElementById("modal-root")
  );
}
