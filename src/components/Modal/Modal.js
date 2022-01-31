import React from "react";
import { NavbarItem } from "../NavbarItem/NavbarItem";

export const Modal = () => {
  const navItems = ["home", "gallery", "news", "contact"];

  return (
    <>
      {navItems.map((item) => (
        <NavbarItem key={item} />
      ))}
    </>
  );
};
