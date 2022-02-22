import React, { useEffect, useRef } from "react";
import { graphql, Link } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../../styles/gallery.module.scss";
import SlideShow from "../../components/SlideShow/SlideShow";

// import { TransitionState } from "gatsby-plugin-transition-link";
import { StaticImage } from "gatsby-plugin-image";

const SingleArtwork = ({ data }) => {
  const sanitydata = data.sanityArt;
  return (
    <div className={styles.singleartwork}>
      <div className={styles.singleartwork__wrapper}>
        <SlideShow images={sanitydata.imagesGallery} />
      </div>
      <div className={styles.singleartwork__info}>
        <h1 className={styles.singleartwork__header}>
          {sanitydata.title + " , " + sanitydata.completedAt}
        </h1>

        <Link
          to={"/gallery#" + sanitydata.slug.current}
          className={styles.singleartwork__back}
        >
          Back to Gallery
        </Link>
        <h2 className={styles.singleartwork__subheader}>Product details</h2>
        <h3 className={styles.singleartwork__details}>
          Watercolor on paper, ink
        </h3>
      </div>
    </div>
  );
};

export default SingleArtwork;

export const query = graphql`
  query ($id: String!) {
    sanityArt(id: { eq: $id }) {
      title
      completedAt(formatString: "YYYY")
      slug {
        current
      }
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      imagesGallery {
        asset {
          gatsbyImageData(width: 400, placeholder: DOMINANT_COLOR, fit: FILL)
        }
      }
    }
  }
`;
