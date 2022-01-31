import React from "react";
import Navbar from "../Navbar/Navbar";
import * as styles from "../../styles/global.module.scss";
import Footer from "../Footer/Footer";

export const Wrapper = ({ children, color }) => {
  return (
    <>
      <Navbar color={color} />
      {children}
      <Footer />
    </>
  );
};
