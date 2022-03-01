import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./blogpost.scss";
import TransitionLink from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";

const blogpost = ({ index, width, blog, slug, image, published, title }) => {
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

  return (
    <motion.div
      intial="rest"
      whileHover="hover"
      animate="rest"
      //   key={index}
      className={styles.blogpost__individualholder}
      style={{ width: width }}
    >
      <div className={styles.blogpost__imageholder}>
        <TransitionLink to={"/blog/" + slug}>
          <motion.div variants={imageMotion}>
            <GatsbyImage
              className={styles.blogpost__image}
              image={image}
              alt=""
              id="pics"
            />
          </motion.div>
        </TransitionLink>
      </div>

      <div className={styles.blogpost__information}>
        <div className="">{published}</div>
        <div className={styles.blogpost__verticalline}></div>
        <div className="">8 min</div>
        <div className={styles.blogpost__verticalline}></div>

        {/* {blog.tags.map((tag, index) => (
          <div key={index} className="">
            {(index ? ", " : "") + tag.tags}
          </div>
        ))} */}
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

      <TransitionLink to={"/blog/" + slug} className={styles.blogpost__title}>
        <motion.div variants={titleMotion}>{title}</motion.div>
      </TransitionLink>
    </motion.div>
  );
};

export default blogpost;
