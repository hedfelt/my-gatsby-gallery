import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./Card.module.scss";

export default function Card({ art, index }) {
  return (
    <TransitionLink to={"/artwork/" + art.slug.current} className={styles.card}>
      <GatsbyImage
        image={art.mainImage.asset.gatsbyImageData}
        alt=""
        className={styles.card__image}
        id="pics"
      />
      <h2 className={styles.card__title}>Leaves in the sky, 2021</h2>
      <div className={styles.card__line}></div>
      <button>MORE</button>
    </TransitionLink>
  );
}
