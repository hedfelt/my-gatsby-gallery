import React, { useEffect, useRef } from "react";
import { graphql, Link } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../../styles/artworks.module.scss";
import { TransitionState } from "gatsby-plugin-transition-link";
import gsap from "gsap";

const SingleArtwork = ({ data, transitionStatus, enter, exit }) => {
  const uncoverRef = useRef(null);
  const tl = new gsap.timeline();
  tl.addLabel("start");
  useEffect(() => {
    tl.to(
      "#uncover_slice",
      1,
      {
        height: 0,
        ease: "power4.InOut",
        stagger: { amount: 0.33 },
      },
      "start"
    ).to(
      "#myimg",
      1.2,
      {
        scale: 1.3,
        ease: "power4.InOut",
      },
      "start"
    );
  }, []);

  useEffect(() => {
    if (transitionStatus === "entering") {
      console.log("entering");
      tl.play();
    }
    if (transitionStatus === "exiting") {
      console.log("BYEBYE");
      tl.reverse();
    }
  }, [transitionStatus, tl]);

  return (
    <div className={styles.singeImage}>
      <TransitionLink
        to={"/artwork/"}
        exit={{
          length: 1,
          delay: 1,
          state: { customstate: "this is a exiting message" },
        }}
        entry={{
          length: 1,
          delay: 1,
          state: { customstate: "this is a entering message" },
        }}
      >
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
            <div
              className={styles.uncover_slice}
              id="uncover_slice"
              ref={uncoverRef}
            ></div>
            <div
              className={styles.uncover_slice}
              id="uncover_slice"
              ref={uncoverRef}
            ></div>
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
      artwork {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
