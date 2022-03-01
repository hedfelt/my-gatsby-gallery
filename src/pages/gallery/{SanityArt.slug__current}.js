import React from "react";
import { graphql, Link } from "gatsby";
import * as styles from "../../styles/gallery.module.scss";
import SlideShow from "../../components/SlideShow/SlideShow";
import { Footer } from "../../components/Footer/Footer";

import { Seo } from "../../components/Seo";

const SingleArtwork = ({ data }) => {
  const sanitydata = data.sanityArt;

  return (
    <div className={styles.singleartwork}>
      <Seo title={sanitydata.title} />
      <div className={styles.singleartwork__mainwrapper}>
        <div className={styles.singleartwork__wrapper}>
          <SlideShow
            dropshadow={sanitydata.dropshadow}
            images={sanitydata.imagesGallery}
          />
        </div>
        <div className={styles.singleartwork__info}>
          <h1 className={styles.singleartwork__header}>
            {sanitydata.title + " , " + sanitydata.completedAt}
          </h1>
          <Link className={styles.singleartwork__return} to={"/gallery/"}>
            Return to Gallery
          </Link>

          <h2 className={styles.singleartwork__details}>
            {sanitydata.mediums}
          </h2>
          <h2 className={styles.singleartwork__details}>{sanitydata.size}</h2>
        </div>
      </div>
      <Footer />
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
      mediums
      size
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dropshadow
      imagesGallery {
        asset {
          gatsbyImageData(width: 400, placeholder: DOMINANT_COLOR, fit: FILL)
        }
      }
    }
  }
`;
