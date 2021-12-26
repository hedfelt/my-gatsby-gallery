import React from "react";

import * as styles from "../styles/home.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { motion } from "framer-motion";

const IndexPage = ({ data }) => {
  const frontpage = data.sanityLandingpage;

  const image = data.sanityLandingpage.images[0].artwork.asset.gatsbyImageData;

  return (
    <div className={styles.home__header}>
      <div className={styles.home__overlay}>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: 300 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="ART"
        >
          {frontpage.header}
        </motion.div>
      </div>
      <div className={styles.home__overlay}>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: 300 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className=""
        >
          {frontpage.subheader}
        </motion.div>
      </div>
      <GatsbyImage image={image} alt="test" />
    </div>
  );
};
export default IndexPage;

export const query = graphql`
  {
    sanityLandingpage {
      header
      subheader
      images {
        artwork {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
