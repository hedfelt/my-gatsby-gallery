import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/artworks.module.scss";
import TransitionLink from "gatsby-plugin-transition-link";
import { TransitionState } from "gatsby-plugin-transition-link";
import gsap from "gsap";
import { motion } from "framer-motion";
import DropDownMenu from "../components/DropDownMenu/DropDownMenu";

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

  const dropdownList = ["Medium", "Colors", "Size"];

  const top = {
    closed: {
      rotate: 45,
      translateX: "1rem",
    },
    opened: {
      rotate: -45,
      translateX: "1rem",
    },
    transition: {
      duration: 0.6,
    },
  };
  const bottom = {
    closed: {
      rotate: -45,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 0,
    },
  };

  const optionsList = ["Watercolor", "Acrylic", "Oil", "Ink"];

  return (
    <>
      <div className={styles.gallery__header}>
        <div className={styles.gallery__bar}>
          {dropdownList.map((item) => (
            <div key={item}>
              <DropDownMenu title={item} options={optionsList} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.gallery}>
        {arts.map((art, index) => (
          <TransitionLink
            className={styles.gallery__holder}
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
              <h2 className={styles.gallery__artwork}>
                Leaves in the sky, 2021
              </h2>
              <div className={styles.gallery__line}></div>
              <button className={styles.gallery__button}>MORE</button>
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
            gatsbyImageData(placeholder: DOMINANT_COLOR)
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
