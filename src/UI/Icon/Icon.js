import React from "react";
import { motion } from "framer-motion";

const Icon = (props) => {
  const textMotion = {
    rest: {
      fill: "transparent",
    },
    hover: {
      fill: "black",
    },
  };

  const facebookMotion = {
    rest: {
      fill: "black",
    },
    hover: {
      fill: "#f5efe8",
    },
  };

  return (
    <motion.svg
      className="facebook"
      initial="rest"
      whileHover="hover"
      animate="rest"
      viewBox="0 0 70 70"
      fill="none"
    >
      <motion.path
        variants={textMotion}
        className="facebook__circle"
        d="M69.5 35C69.5 53.4947 54.2846 68.5 35.5 68.5C16.7154 68.5 1.5 53.4947 1.5 35C1.5 16.5053 16.7154 1.5 35.5 1.5C54.2846 1.5 69.5 16.5053 69.5 35Z"
        fill="transparent"
        stroke="#9B9797"
      />
      <motion.path
        className="facebook__icon"
        variants={facebookMotion}
        d={props.icon}
      />
    </motion.svg>
  );
};

export default Icon;
