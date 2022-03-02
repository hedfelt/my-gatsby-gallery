import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./SlideShow.module.scss";

export default function SlideShow({ images, dropshadow }) {
  const [[page, direction], setPage] = useState([0, 0]);

  const dotList = [...Array(images.length).keys()];

  const paginate = (newDirection: number) => {
    const min = 0;
    const max = images.length - 1;
    if (page == max && newDirection > 0) {
      setPage([min, newDirection]);
    } else if (page == min && newDirection < 0) {
      setPage([max, newDirection]);
    } else {
      setPage([page + newDirection, newDirection]);
    }
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        y: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      y: 0,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        y: 0,
      };
    },
  };

  const selectorVariant = {
    active: { backgroundColor: "#000" },
    inactive: { backgroundColor: "#D7D7D7" },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const arrowClasses =
    images.length === 1
      ? `${styles.slideshow__arrow} ${styles.slideshow__arrow__disabled}`
      : styles.slideshow__arrow;

  const imagewrapperClasses = dropshadow
    ? `${styles.slideshow__imgwrapper} ${styles.slideshow__dropshadow}`
    : styles.slideshow__imgwrapper;

  return (
    <div className={styles.wrapper}>
      <div className={styles.slideshow}>
        <div className={styles.slideshow__prev} onClick={() => paginate(-1)}>
          <div className={arrowClasses}></div>
        </div>
        <div className={styles.slideshow__background}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              className={imagewrapperClasses}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <GatsbyImage
                alt=""
                image={images[page].asset.gatsbyImageData}
                className={styles.slideshow__img}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.slideshow__next} onClick={() => paginate(1)}>
          <div className={arrowClasses}></div>
        </div>
      </div>
      <div className={styles.wrapper__selectors}>
        {images.length > 1 &&
          dotList.map((pageindex) => {
            return (
              <motion.div
                key={pageindex}
                className={styles.wrapper__selector}
                variants={selectorVariant}
                animate={pageindex == page ? "active" : "inactive"}
              ></motion.div>
            );
          })}
      </div>
    </div>
  );
}
