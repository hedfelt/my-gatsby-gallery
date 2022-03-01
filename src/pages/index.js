import React from "react";
import * as styles from "../styles/home.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer/Footer";
import { Seo } from "../components/Seo";

export default function IndexPage({ data }) {
  const image =
    data.sanityLandingpage.images[0].mainImage.asset.gatsbyImageData;

  const linkVariant = {
    rest: {
      x: 0,
    },
    hover: {
      x: 2.5,
    },
  };
  const arrowVariant = {
    rest: {
      x: 0,
      rotate: "315deg",
    },
    hover: {
      x: -2.5,
      rotate: "315deg",
    },
  };

  return (
    <div className={styles.home}>
      <Seo title={"home page"} lang={"eng"} />

      <div className={styles.home__landingpageWrapper}>
        <div className={styles.home__leftwrapper}>
          <h1 className={styles.home__header}>DISCOVER</h1>

          <motion.div
            initial="rest"
            whileHover="hover"
            className={styles.home__subheader}
          >
            <TransitionLink to={"/gallery/"} className={styles.home__link}>
              <motion.div variants={linkVariant}>VISIT THE STUDIO</motion.div>
              <motion.div
                variants={arrowVariant}
                className={styles.home__arrow}
              ></motion.div>
            </TransitionLink>
          </motion.div>
        </div>

        <div className={styles.home__imagewrapper}>
          <GatsbyImage image={image} className={styles.home__image} alt="" />
          <div className={styles.home__overlaygrid}></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

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
