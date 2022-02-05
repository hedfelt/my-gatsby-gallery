import React, { useEffect, useRef } from "react";
import { graphql, Link } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../../styles/gallery.module.scss";
// import { TransitionState } from "gatsby-plugin-transition-link";

const SingleArtwork = ({ data }) => {
  return <div>HELLO</div>;
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
