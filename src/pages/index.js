import React, { useState } from "react";
import * as styles from "../styles/home.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";

export default function IndexPage({ data }) {
  const frontpage = data.sanityLandingpage;

  const image =
    data.sanityLandingpage.images[0].mainImage.asset.gatsbyImageData;

  return (
    <div className={styles.home}>
      <Navbar color="white" />
      <div className={styles.home__wrapper}>
        <div className={styles.home__box}>
          <div className={styles.home__header}>
            THE
            <br />
            GALLERY
          </div>
          <div className={styles.home__subheader}>
            <div>DISCOVER</div>
            <div className={styles.home__arrow}></div>
          </div>
        </div>
        <div className={styles.home__box2}>
          <GatsbyImage image={image} className={styles.home__image} alt="" />
          <div className={styles.home__overlaygrid}>
            <div className={styles.home__rightwrapper}>
              <div className={styles.home__header}>
                THE
                <br />
                GALLERY
              </div>
              <div className={styles.home__subheader}>
                <div>DISCOVER</div>
                <div className={styles.home__arrow}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
