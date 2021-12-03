import React from "react";
import { motion } from "framer-motion";

const Line = ({ length, color, rotate }) => {
  const lineMotion = {
    hover: {
      y: 1,
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
    rest: (i) => {
      const delay = i;
      return {
        pathLength: delay,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "tween",
          ease: "easeOut",
        },
      };
    },
  };
  return (
    <motion.svg
      transform={rotate}
      height="5%"
      width="100%"
      viewBox="0 0 100 5"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 2 H100"
        stroke={color}
        strokeWidth="0.1"
        variants={lineMotion}
        custom={length}
      />
    </motion.svg>
  );
};

export default Line;
