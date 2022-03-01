import React from "react";
import * as styles from "./Backdrop.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export const Backdrop = ({ showModal, iconChange }) => {
  const backdropVariant = {
    hidden: { opacity: 0, transition: { delay: 0.3, duration: 0.3 } },
    show: {
      opacity: 0.5,
      backgroundColor: "#000",
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          onClick={iconChange}
          variants={backdropVariant}
          initial="hidden"
          animate="show"
          exit="hidden"
          className={styles.backdrop}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};
