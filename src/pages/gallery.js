import React, { useState } from "react";
import { graphql } from "gatsby";
import * as styles from "../styles/gallery.module.scss";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Menu from "../components/Menu/Menu";

export default function Gallery({ data }) {
  const [checkedValues, setCheckedValues] = useState([]);

  const arts = data.allSanityArt.nodes;
  const menus = data.allSanityTags.nodes;

  const handleChecked = (e) => {
    const { value, checked } = e.target;

    let newCheckedValues = checkedValues.filter((item) => item !== value);

    if (checked) newCheckedValues.push(value);

    setCheckedValues(newCheckedValues);
  };

  return (
    <div className={styles.gallery}>
      <Menu
        items={menus}
        onCheckedValue={handleChecked}
        checkedValues={checkedValues}
      />
      <div className={styles.gallery__wrapper}>
        <ImageGallery items={arts} checkedValues={checkedValues} />
      </div>
    </div>
  );
}

export const query = graphql`
  {
    allSanityArt {
      nodes {
        mainImage {
          asset {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
        slug {
          current
          _key
        }
        dropshadow
        tag {
          name
          type
        }
        title
        description
        alternativetext
      }
    }

    allSanityTags {
      nodes {
        name
        type
        id
      }
    }
  }
`;
