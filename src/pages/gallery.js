import React, { useState } from "react";
import { graphql } from "gatsby";
import * as styles from "../styles/gallery.module.scss";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Menu from "../components/Menu/Menu";
import { Footer } from "../components/Footer/Footer";
import { Seo } from "../components/Seo";
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
      <Seo title={"Hanne Edfelt - Gallery"} />

      <div className={styles.gallery__wrapper}>
        <Menu
          items={menus}
          onCheckedValue={handleChecked}
          checkedValues={checkedValues}
        />
        <ImageGallery items={arts} checkedValues={checkedValues} />
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  {
    allSanityArt {
      nodes {
        mainImage {
          asset {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              aspectRatio: 0.8
              layout: FULL_WIDTH
            )
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
