import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./Card.module.scss";
import { motion } from "framer-motion";

export default function Card({ art }) {
  const imagewrapperClasses = art.dropshadow
    ? `${styles.card__imagewrapper} ${styles.card__dropshadow}`
    : styles.card__imagewrapper;
  return (
    <div className={styles.card}>
      <TransitionLink
        to={"/gallery/" + art.slug.current}
        className={styles.card__link}
      >
        <div id={art.slug.current} className={imagewrapperClasses}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <GatsbyImage
              image={art.mainImage.asset.gatsbyImageData}
              alt=""
              className={styles.card__image}
            />
          </motion.div>
        </div>
        <div className={styles.card__wrapper}>
          <h3 className={styles.card__header1}>watercolor</h3>
          <h3 className={styles.card__header}>{art.title}</h3>
        </div>
      </TransitionLink>
    </div>
  );
}
