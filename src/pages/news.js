import React, { useEffect } from "react";
import * as styles from "../styles/news.module.scss";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import TransitionLink from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import { Seo } from "../components/Seo";

export default function blog({ data }) {
  const blogposts = data.allSanityBlogPost.nodes;
  const titleMotion = {
    rest: {
      y: 0,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      y: 10,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const lineMotion = {
    hover: {
      y: 1,
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
    rest: (i) => {
      const delay = i;
      return {
        pathLength: delay,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "tween",
          ease: "easeOut",
        },
      };
    },
  };

  const imageMotion = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const verticalLine = {
    rest: {
      height: 0,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn",
      },
    },
    active: {
      height: "100%",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const textVariant = {
    rest: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
        type: "tween",
        ease: "easeIn",
      },
    },
    active: {
      opacity: 1,
      transition: {
        delay: 0.1,

        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={styles.articles}>
      <Seo title={"news page"} />
      <div className={styles.articles__headerwrapper}>
        <Link className={styles.singleArticle__return} to={"/"}>
          Return to Homepage
        </Link>
        <h1 className={styles.articles__header}>Read the latest news</h1>
      </div>
      <div className={styles.grid}>
        {blogposts.map((blog, index) =>
          index == 2 ? (
            <motion.div
              variants={textVariant}
              initial="rest"
              whileInView="active"
              viewport={{ once: true }}
              className={styles.grid__verticallinewrapper}
            >
              <div className={styles.grid__verticallineholder}>
                <motion.div
                  variants={verticalLine}
                  initial="rest"
                  whileInView="active"
                  viewport={{ once: true }}
                  className={styles.grid__verticalanimationline}
                ></motion.div>
              </div>
              <motion.div
                variants={textVariant}
                initial="rest"
                whileInView="active"
                viewport={{ once: true }}
                className={styles.grid__text}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur lorem quam, efficitur ac ligula at, tincidunt
                consequat ligula. In id viverra ipsum.
              </motion.div>
              <div className={styles.grid__verticallineholder}>
                <motion.div
                  variants={verticalLine}
                  initial="rest"
                  whileInView="active"
                  viewport={{ once: true }}
                  className={styles.grid__verticalanimationline}
                ></motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              intial="rest"
              whileHover="hover"
              animate="rest"
              key={index}
              className={
                index < 2
                  ? styles.grid__individualholderLarge
                  : styles.grid__individualholder
              }
            >
              <div
                className={
                  index < 2
                    ? styles.grid__imageholderLarge
                    : styles.grid__imageholderSmall
                }
              >
                <TransitionLink to={"/news/" + blog.slug.current}>
                  <motion.div variants={imageMotion}>
                    <GatsbyImage
                      className={styles.grid__image}
                      image={blog.mainImage.asset.gatsbyImageData}
                      alt=""
                      id="pics"
                    />
                  </motion.div>
                </TransitionLink>
              </div>
              {index < 2 ? (
                <div
                  className={`${styles.grid__information} ${styles.grid__informationFeatured}`}
                >
                  <h2 className={styles.grid__featured}>FEATURED ARTICLE</h2>
                  <div className="">{blog.publishedAt}</div>
                </div>
              ) : (
                <div className={styles.grid__information}>
                  <div className="">{blog.publishedAt}</div>
                  <div className={styles.grid__verticalline} />
                  {blog.tags.map((tag, index) => (
                    <div key={index} className="">
                      {(index ? ", " : "") + tag.name}
                    </div>
                  ))}
                </div>
              )}

              <motion.svg
                height="2%"
                width="100%"
                viewBox="0 0 100 5"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0 2 H100"
                  stroke="#000"
                  strokeWidth="0.2"
                  variants={lineMotion}
                  custom={index < 2 ? 1 : 0.5}
                />
              </motion.svg>
              <TransitionLink
                to={"/news/" + blog.slug.current}
                className={styles.grid__title}
              >
                <motion.div
                  variants={titleMotion}
                  className={styles.articles__articletitle}
                >
                  {blog.title}
                </motion.div>
              </TransitionLink>
            </motion.div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  {
    allSanityBlogPost {
      nodes {
        publishedAt(formatString: "MMMM D, YYYY")
        title

        tags {
          name
        }
        author {
          name
        }
        slug {
          _key
          current
        }
        mainImage {
          asset {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              aspectRatio: 1.2
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`;
