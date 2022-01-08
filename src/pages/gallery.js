import React from "react";
import { graphql } from "gatsby";

import * as styles from "../styles/gallery.module.scss";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Menu from "../components/Menu/Menu";

export default function Gallery({ data }) {
  const arts = data.allSanityArt.nodes;

  return (
    <>
      <Menu />
      <ImageGallery items={arts} />
    </>
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
  }
`;
