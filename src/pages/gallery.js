import React from "react";
import { graphql } from "gatsby";
import * as styles from "../styles/gallery.module.scss";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Menu from "../components/Menu/Menu";
import { Wrapper } from "../components/Wrapper/Wrapper";

export default function Gallery({ data }) {
  const arts = data.allSanityArt.nodes;

  const menus = data.allSanityTags.nodes;

  return (
    <Wrapper color="black">
      <div className={styles.gallery}>
        <Menu items={menus} />
        <ImageGallery items={arts} />
      </div>
    </Wrapper>
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
