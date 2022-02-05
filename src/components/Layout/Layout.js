import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

import Modal from "../Modal/Modal";

export default function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);

  const clickHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Navbar
        iconChange={clickHandler}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        iconChange={clickHandler}
      />
      {children}
    </>
  );
}
