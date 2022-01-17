import React from "react";
import { graphql } from "gatsby";

import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/gallery.module.scss";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";

export default function Gallery({ data }) {
  const arts = data.allSanityArt.nodes;

  return (
    <div className={styles.gallery}>
      <Navbar color={"black"} />
      <Menu />
      <ImageGallery items={arts} />
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
      }
    }
  }
`;
