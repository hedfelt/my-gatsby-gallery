import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./Card.module.scss";
import { motion } from "framer-motion";

export default function Card({ art }) {
  return (
    <div id={art.slug.current} className={styles.card}>
      <TransitionLink
        to={"/gallery/" + art.slug.current}
        className={styles.card__link}
      >
        <div className={art.dropshadow && styles.card__dropshadow}>
          <div className={styles.card__imagewrapper}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <GatsbyImage
                image={art.mainImage.asset.gatsbyImageData}
                alt={art.alternativetext}
                className={styles.card__image}
              />
            </motion.div>
          </div>
        </div>
      </TransitionLink>
    </div>
  );
}
