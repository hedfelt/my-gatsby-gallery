import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./ImageGallery.module.scss";

export default function ImageGallery({ items }) {
  return (
    <div className={styles.gallery}>
      {items.map((art, index) => (
        <div className={styles.gallery__wrapper} key={index}>
          <TransitionLink
            to={"/artwork/" + art.slug.current}
            className={styles.gallery__card}
          >
            <GatsbyImage
              image={art.mainImage.asset.gatsbyImageData}
              alt=""
              className={styles.gallery__image}
              id="pics"
              style={{ width: "100%" }}
            />
            <h2 className={styles.gallery__title}>Leaves in the sky, 2021</h2>
            <div className={styles.gallery__line}></div>
            <button>MORE</button>
          </TransitionLink>
        </div>
      ))}
    </div>
  );
}
