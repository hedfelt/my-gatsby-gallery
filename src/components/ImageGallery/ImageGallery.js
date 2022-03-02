import React from "react";
import * as styles from "./ImageGallery.module.scss";
import Card from "../Card/Card";

export default function ImageGallery({ items, checkedValues }) {
  const filteredArt = items.filter((art) =>
    checkedValues.length > 0
      ? checkedValues.some((checkedValue) =>
          art.tag.map((tag) => tag.name).includes(checkedValue)
        )
      : true
  );

  return (
    <div className={styles.gallery}>
      {filteredArt.length ? (
        filteredArt.map((art) => (
          <div className={styles.gallery__card} key={art.title}>
            <Card art={art} />{" "}
          </div>
        ))
      ) : (
        <div className={styles.gallery__error}>Sorry, no results.</div>
      )}
    </div>
  );
}
