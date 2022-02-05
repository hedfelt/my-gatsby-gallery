import React, { useEffect, useState } from "react";
import * as styles from "./Modal.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import NavbarItem from "../NavbarItem/NavbarItem";

export default function Modal({ showModal, iconChange }) {
  const navigationList = ["home", "gallery", "news", "contact"];

  return createPortal(
    <AnimatePresence>
      {showModal && (
        <motion.div
          key="modal"
          className={styles.modal}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.ul
            key="modal_list"
            className={styles.modal__list}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
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
