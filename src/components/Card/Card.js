import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./Card.module.scss";
import { motion } from "framer-motion";

export default function Card({ art }) {
  return (
    <div className={styles.card}>
      <TransitionLink
        to={"/artwork/" + art.slug.current}
        className={styles.card__link}
      >
        <div className={styles.card__imagewrapper}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <GatsbyImage
              image={art.mainImage.asset.gatsbyImageData}
              alt={art.alternativetext}
              className={styles.card__image}
            />
          </motion.div>
        </div>
        <div className={styles.card__wrapper}>
          <div>
            <h2>{art.title}</h2>
            <h3>{art.description}</h3>
          </div>
          <button className={styles.card__button}>See more</button>
        </div>
      </TransitionLink>
    </div>
  );
}
