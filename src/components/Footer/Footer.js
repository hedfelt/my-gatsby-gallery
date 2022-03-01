import React from "react";
import * as styles from "./Footer.module.scss";
import { motion } from "framer-motion";
import { Link } from "gatsby";

export const Footer = () => {
  const footervariant = {
    rest: { opacity: 0 },
    active: { opacity: 1 },
  };
  return (
    <motion.div className={styles.footer}>
      <motion.div
        variants={footervariant}
        initial="rest"
        whileInView="active"
        transition={{ duration: 0.8 }}
        className={styles.footer__middlewrapper}
      >
        <div className={styles.footer__content}>
          <div className={styles.footer__title}>Social media</div>
          <a href="" className={styles.footer__link}>
            INSTAGRAM
          </a>
          <a href="" className={styles.footer__link}>
            FACEBOOK
          </a>
        </div>
        <div className={styles.footer__content}>
          <div className={styles.footer__title}>Email</div>
          <a
            className={styles.footer__link}
            href="mailto:hanne.edfelt@gmail.com"
          >
            HANNE.EDFELT@GMAIL.COM
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={footervariant}
        initial="rest"
        whileInView="active"
        transition={{ duration: 1 }}
        className={styles.footer__wrapper}
      >
        HANNE EDFELT © 2021
        <div className={styles.footer__line}></div>
        CREATED BY HANNE EDFELT
      </motion.div>
    </motion.div>
  );
};
