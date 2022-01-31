import React, { useEffect, useRef } from "react";
import { graphql, Link } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../../styles/gallery.module.scss";
import { TransitionState } from "gatsby-plugin-transition-link";

const SingleArtwork = () => {
  return (
    <div className={styles.singeImage}>
      <TransitionLink to={"/artwork/"}>
        <div className={styles.box} id="mybox">
          <div className={styles.singleWrapper}>
            <GatsbyImage
              image={data.sanityArt.artwork.asset.gatsbyImageData}
              alt="test"
              className={styles.myimg}
              id="myimg"
              // className="myimg fill"
            />
          </div>
          <div className={styles.uncover}>
            <div className={styles.uncover_slice} id="uncover_slice"></div>
            <div className={styles.uncover_slice}></div>
            <div className={styles.uncover_slice}></div>
          </div>
        </div>
      </TransitionLink>
    </div>
  );
};

export default SingleArtwork;

export const query = graphql`
  query ($id: String!) {
    sanityArt(id: { eq: $id }) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
