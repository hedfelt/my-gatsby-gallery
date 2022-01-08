import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./ImageGallery.module.scss";
import Card from "../Card/Card";

export default function ImageGallery({ items }) {
  return (
    <div className={styles.gallery}>
      {items.map((art, index) => (
        <Card className={styles.gallery__item} key={index} art={art} />
      ))}
    </div>
  );
}
