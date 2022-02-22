import React from "react";
import * as styles from "../styles/home.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";

export default function IndexPage({ data }) {
  const image =
    data.sanityLandingpage.images[0].mainImage.asset.gatsbyImageData;

  return (
    <div className={styles.home}>
      <div className={styles.home__leftwrapper}>
        <div className={styles.home__header}>
          <TransitionLink to={"/gallery/"} className={styles.home__link}>
            THE
            <br />
            GALLERY
          </TransitionLink>
        </div>
        <div className={styles.home__subheader}>
          <TransitionLink to={"/gallery/"} className={styles.home__link}>
            <div>DISCOVER</div>
          </TransitionLink>
          <div className={styles.home__arrow}></div>
        </div>
      </div>
      <div className={styles.home__rightwrapper}>
        <GatsbyImage image={image} className={styles.home__image} alt="" />
        <div className={styles.home__overlaygrid}></div>
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
