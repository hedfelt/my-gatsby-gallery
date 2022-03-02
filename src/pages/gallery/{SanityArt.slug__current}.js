import React from "react";
import { graphql } from "gatsby";
import * as styles from "../../styles/gallery.module.scss";
import SlideShow from "../../components/SlideShow/SlideShow";
import { Footer } from "../../components/Footer/Footer";

import { Seo } from "../../components/Seo";
import ReturnLink from "../../components/ReturnLink/ReturnLink";

const SingleArtwork = ({ data }) => {
  const sanitydata = data.sanityArt;

  return (
    <div className={styles.singleartwork}>
      <Seo title={"Hanne Edfelt - " + sanitydata.title} />
      <div className={styles.singleartwork__mainwrapper}>
        <div className={styles.singleartwork__wrapper}>
          <SlideShow
            dropshadow={sanitydata.dropshadow}
            images={sanitydata.imagesGallery}
          />
        </div>
        <div className={styles.singleartwork__info}>
          <h1>{sanitydata.title + " , " + sanitydata.completedAt}</h1>
          <ReturnLink to={"/gallery/"}>{" Return to Gallery"}</ReturnLink>

          <h2>{sanitydata.mediums}</h2>
          <h2>{sanitydata.size}</h2>
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
