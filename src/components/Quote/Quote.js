import React from "react";
import * as styles from "./Quote.module.scss";
import { motion } from "framer-motion";

export const Quote = () => {
  const verticalLine = {
    rest: {
      height: 0,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn",
      },
    },
    active: {
      height: "100%",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const textVariant = {
    rest: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
        type: "tween",
        ease: "easeIn",
      },
    },
    active: {
      opacity: 1,
      transition: {
        delay: 0.1,

        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={textVariant}
      initial="rest"
      whileInView="active"
      viewport={{ once: true }}
      className={styles.quote}
    >
      <div className={styles.quote__wrapper}>
        <motion.div
          variants={verticalLine}
          initial="rest"
          whileInView="active"
          viewport={{ once: true }}
          className={styles.quote__line}
        ></motion.div>
      </div>
      <motion.div
        variants={textVariant}
        initial="rest"
        whileInView="active"
        viewport={{ once: true }}
        className={styles.quote__text}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lorem
        quam, efficitur ac ligula at, tincidunt consequat ligula. In id viverra
        ipsum.
      </motion.div>
      <div className={styles.quote__wrapper}>
        <motion.div
          variants={verticalLine}
          initial="rest"
          whileInView="active"
          viewport={{ once: true }}
          className={styles.quote__line}
        ></motion.div>
      </div>
    </motion.div>
  );
};
