import React from "react";
import "./Backdrop.scss";

export const Backdrop = ({ showModal, setShowModal, iconChange }) => {
  return showModal && <div className="backdrop"></div>;
};
