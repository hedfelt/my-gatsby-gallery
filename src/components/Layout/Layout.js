import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import * as styles from "../../styles/global.module.scss";
import Modal from "../Modal/Modal";

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar
        iconChange={() => setShowModal(!showModal)}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
