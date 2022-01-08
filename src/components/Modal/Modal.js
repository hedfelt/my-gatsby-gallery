import React, { useEffect, useState } from "react";
import "./Modal.scss";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Link } from "gatsby";

export default function Modal({ showModal, iconChange }) {
  const navigationList = ["home", "about", "contact", "news", "gallery"];

  return createPortal(
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <>
          <div className="modal__backdrop" />
          <motion.div
            key="modal"
            className="modal"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <ol className="modal__links">
              {navigationList.map((title, index) => (
                <li className="modal__wrapper" key={title}>
                  <Link
                    className="modal__number"
                    activeClassName="modal__activenumber"
                    to={title === "home" ? "/" : "/" + title}
                    onClick={iconChange}
                  >
                    {"0" + (index + 1)}
                  </Link>
                  <Link
                    className="modal__link"
                    activeClassName="modal__activelink"
                    to={title === "home" ? "/" : "/" + title}
                    onClick={iconChange}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ol>
          </motion.div>
        </>
      )}
    </AnimatePresence>,

    document.getElementById("modal-root")
  );
}
