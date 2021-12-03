import React from "react";
import { motion } from "framer-motion";

const Icon = (props) => {
  const facebookMotion = {
    rest: {
      fill: "#FBF7F2",
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
        className="facebook__icon"
        variants={facebookMotion}
        d={props.icon}
      />
    </motion.svg>
  );
};

export default Icon;
