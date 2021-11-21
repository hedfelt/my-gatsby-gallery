import React, { useEffect } from "react";
import { Link } from "gatsby";
import "./Modal.scss";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, setShowModal }) => {
  const modalRemove = () => {
    setShowModal(!showModal);
  };

  //   typeof document != undefined;

  //   useEffect(() => {
  //     if (typeof document != undefined)
  //       showModal
  //         ? document.querySelector("body").classList.add("lock-screen")
  //         : document.querySelector("body").classList.remove("lock-screen");
  //   }, [showModal]);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowModal(showModal);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [showModal, setShowModal]);

  const artworksVariants = {
    hidden: { opacity: 0, y: "6vh", rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.9, delay: 0.1, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "4vh",

      transition: { duration: 0.7, delay: 0 },
    },
    hover: {
      scale: 1.02,
    },
  };

  const blogpostVariants = {
    hidden: { opacity: 0, y: "5vh", rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.9, delay: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "4vh",

      transition: { duration: 0.7, delay: 0 },
    },
    hover: {
      scale: 1.02,
    },
  };

  const contactVariants = {
    hidden: { opacity: 0, y: "4vh" },
    visible: {
      opacity: 1,
      y: 0,

      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "4vh",

      transition: { duration: 0.7, delay: 0 },
    },
    hover: {
      scale: 1.02,
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <nav className="modal__links" onClick={modalRemove}>
            <div className="modal__groupOne">
              <motion.div
                className="modal__link "
                variants={artworksVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
              >
                <Link
                  onClick={modalRemove}
                  className="modal__link"
                  to="/artwork"
                  activeStyle={{ color: "rgb(178, 147, 244)" }}
                >
                  Artworks
                </Link>
              </motion.div>
              <div className="modal__number">01</div>
              <div className="modal__subheader">
                Some <br /> Paintings
              </div>
            </div>

            <div className="modal__groupTwo">
              <motion.div
                className="modal__link"
                variants={contactVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
              >
                <Link
                  onClick={modalRemove}
                  className="modal__link"
                  to="/contact"
                  activeStyle={{ color: "rgb(178, 147, 244)" }}
                >
                  Contact
                </Link>
              </motion.div>
              <div className="modal__number">02</div>
              <div className="modal__subheader">
                Say <br /> Hello!
              </div>
            </div>

            <div className="modal__groupThree">
              <div className="modal__subgroup">
                <div className="modal__numberThree">03</div>
                <div className="modal__subheaderThree">
                  The <br /> Blog
                </div>
              </div>
              <motion.div
                className="modal__link"
                variants={blogpostVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
              >
                <Link
                  onClick={modalRemove}
                  className="modal__link"
                  to="/blog"
                  activeStyle={{ color: "rgb(178, 147, 244)" }}
                >
                  BLOG
                </Link>
              </motion.div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
