import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/artworks.module.scss";
import TransitionLink from "gatsby-plugin-transition-link";
import { TransitionState } from "gatsby-plugin-transition-link";
import gsap from "gsap";

export default function Artwork({ data, transitionStatus }) {
  const arts = data.allSanityArt.nodes;
  useEffect(() => {
    console.log("ArtworksPage", transitionStatus);
  }, [transitionStatus]);

  useEffect(() => {
    if (transitionStatus === "entering") {
      // .fromTo(".holder img", {yPercent:-100}, {duration: 0.5, yPercent: 0}, "<")
      // gsap.to(".active", {
      //   autoAlpha: 1,
      //   duration: 1,
      // });
    }
    if (transitionStatus === "exiting") {
      // gsap.to(".colorful-face", { autoAlpha: 0, duration: 1 });
      // gsap.fromTo("#holder", { yPercent: 100 }, { duration: 0.5, yPercent: 0 });
      // gsap.fromTo(
      //   "#pics",
      //   { yPercent: -100 },
      //   { duration: 0.5, yPercent: 0 },
      //   "<"
      // );
    }
  }, [transitionStatus]);

  // const handleClick = (slug) => {
  //   arts
  //     .filter((art) => art.slug.current !== slug)
  //     .forEach((art) => {
  //       gsap.to(`.${art.slug.current}`, { autoAlpha: 0, duration: 1 });
  //     });
  // };

  return (
    <>
      <div className={styles.gallery}>
        {arts.map((art, index) => (
          <TransitionLink
            // onClick={() => handleClick(art.slug.current)}
            to={"/artwork/" + art.slug.current}
            key={index}
            // exit={{
            //   length: 0.1,
            // }}
            entry={{
              delay: 1,
              length: 0.1,
            }}
          >
            {/* {console.log(art.slug.current)} */}
            <div
              // className={art.slug.current}
              className={styles.holder}
              id="holder"
            >
              <GatsbyImage
                image={art.artwork.asset.gatsbyImageData}
                alt=""
                className={styles.pics}
                id="pics"
              />
            </div>
          </TransitionLink>
        ))}
      </div>
    </>
  );
}

export const query = graphql`
  {
    allSanityArt {
      nodes {
        artwork {
          asset {
            gatsbyImageData(aspectRatio: 1, placeholder: DOMINANT_COLOR)
          }
        }
        slug {
          current
          _key
        }
      }
    }
  }
`;
