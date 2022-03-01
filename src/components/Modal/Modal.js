import React, { useEffect, useState } from "react";
import * as styles from "./Modal.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import NavbarItem from "../NavbarItem/NavbarItem";

export default function Modal({ showModal, iconChange }) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth > 800);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 800) setIsMobile(false);
      else setIsMobile(true);
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const container = {
    hidden: {
      opacity: 1,
      width: "0",
      transition: {
        ease: "easeIn",
        when: "afterChildren",
        duration: 0.4,
      },
    },
    show: {
      opacity: 1,
      width: isMobile ? "100%" : "50%",
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
        <motion.nav
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
            <NavbarItem iconChange={iconChange} item={"home"} key={"home"} />
            <NavbarItem
              iconChange={iconChange}
              item={"gallery"}
              key={"gallery"}
            />
            <NavbarItem iconChange={iconChange} item={"news"} key={"news"} />
            <NavbarItem
              iconChange={iconChange}
              item={"contact"}
              key={"contact"}
            />
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>,

    document.getElementById("modal-root")
  );
}
