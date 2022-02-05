import React from "react";
import * as styles from "./ImageGallery.module.scss";
import Card from "../Card/Card";

export default function ImageGallery({ items, checkedValues }) {
  const filteredArt = items.filter((art) =>
    checkedValues.every((checkedValue) =>
      art.tag.map((tag) => tag.name).includes(checkedValue)
    )
  );
  return (
    <div className={styles.gallery}>
      {filteredArt.length ? (
        filteredArt.map((art, index) => <Card art={art} key={index} />)
      ) : (
        <div className={styles.gallery__error}>Sorry, no results.</div>
      )}
    </div>
  );
}
