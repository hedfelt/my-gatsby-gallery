import React from "react";
import * as styles from "../styles/home.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { motion } from "framer-motion";

const IndexPage = ({ data }) => {
  const frontpage = data.sanityLandingpage;

  const image =
    data.sanityLandingpage.images[0].mainImage.asset.gatsbyImageData;

  return <div className={styles.home__header}></div>;
};
export default IndexPage;

export const query = graphql`
  {
    sanityLandingpage {
      header
      subheader
      images {
        mainImage {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
