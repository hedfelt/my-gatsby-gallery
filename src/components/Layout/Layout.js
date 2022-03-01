import React, { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal";
import * as styles from "./Layout.module.scss";
import { Backdrop } from "../Backdrop/Backdrop";

export default function Layout({ children, title }) {
  const [showModal, setShowModal] = useState(false);

  const clickHandler = () => {
    setShowModal(!showModal);
  };

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27 && showModal) {
        setShowModal(!showModal);
      }
    },
    [showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  return (
    <>
      <Navbar
        iconChange={clickHandler}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Backdrop showModal={showModal} iconChange={clickHandler} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        iconChange={clickHandler}
      />
      {children}
    </>
  );
}
