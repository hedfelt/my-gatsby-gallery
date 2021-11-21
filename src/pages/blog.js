import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/articles.module.scss";
import Darkmode from "../UI/Darkmode/Darkmode";
import TransitionLink from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";
import Blogpost from "../UI/Hooks/blogpost/blogpost";

const blog = ({ data }) => {
  const blogposts = data.allSanityBlogPost.nodes;

  // const titleMotion = {
  //   rest: {
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       type: "tween",
  //       ease: "easeIn",
  //     },
  //   },
  //   hover: {
  //     y: 10,
  //     transition: {
  //       duration: 0.5,
  //       type: "tween",
  //       ease: "easeOut",
  //     },
  //   },
  // };

  // const lineMotion = {
  //   hover: {
  //     y: 1,
  //     pathLength: 1,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.5,
  //       type: "tween",
  //       ease: "easeOut",
  //     },
  //   },
  //   rest: (i) => {
  //     const delay = i;
  //     return {
  //       pathLength: delay,
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         duration: 0.5,
  //         type: "tween",
  //         ease: "easeOut",
  //       },
  //     };
  //   },
  // };

  // const imageMotion = {
  //   rest: {
  //     scale: 1,
  //     transition: {
  //       duration: 0.5,
  //       type: "tween",
  //       ease: "easeIn",
  //     },
  //   },
  //   hover: {
  //     scale: 1.05,
  //     transition: {
  //       duration: 0.5,
  //       type: "tween",
  //       ease: "easeOut",
  //     },
  //   },
  // };

  return (
    <div className={styles.articles}>
      <div className={styles.articles__wrapper}>
        <div className={styles.articles__url}>Hanne Edfelt - Blog</div>
        <div className={styles.articles__headerwrapper}>
          <div className={styles.articles__header}>
            Art - the history, theory <br /> & concepts.
          </div>

          <div className={styles.articles__subheader}>
            Read on for read on for read on for read on read on for read on Read
            on for read on read on for read on on for read on read on for read
            on on for read on read on for read on on for read.
          </div>
          <div className={styles.articles__darkmode}>
            <Darkmode />
          </div>
        </div>
      </div>

      {/* blogposts med hook */}

      <div className={styles.grid}>
        {blogposts.map((blog, index) => (
          <Blogpost
            key={index}
            index={index}
            width={"33%"}
            blog={blog}
            slug={blog.slug.current}
            image={blog.mainImage.asset.gatsbyImageData}
            published={blog.publishedAt}
            title={blog.title}
          />
        ))}
      </div>

      {/* blogposts */}

      {/* <div className={styles.grid}>
        {blogposts.map((blog, index) => (
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
            <div className={styles.grid__imageholder}>
              <TransitionLink to={"/blog/" + blog.slug.current}>
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

            <div className={styles.grid__information}>
              <div className="">{blog.publishedAt}</div>
              <div className={styles.grid__verticalline}></div>
              <div className="">8 min</div>
              <div className={styles.grid__verticalline}></div>

              {blog.tags.map((tag, index) => (
                <div key={index} className="">
                  {(index ? ", " : "") + tag.tags}
                </div>
              ))}
            </div>
            <motion.svg
              height="5%"
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
              to={"/blog/" + blog.slug.current}
              className={styles.grid__title}
            >
              <motion.div variants={titleMotion} className="">
                {blog.title}
              </motion.div>
            </TransitionLink>
          </motion.div>
        ))}
      
    </div> */}
    </div>
  );
};

export default blog;

export const query = graphql`
  {
    allSanityBlogPost {
      nodes {
        publishedAt(formatString: "MMMM D, YYYY")
        title
        featured
        tags {
          tags
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
            gatsbyImageData(placeholder: DOMINANT_COLOR, aspectRatio: 1.47)
          }
        }
      }
    }
  }
`;
