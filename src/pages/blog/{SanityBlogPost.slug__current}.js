import React, { useEffect, useRef } from "react";
import { graphql, Link } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../../styles/articles.module.scss";
import BlockContent from "@sanity/block-content-to-react";

const SingleArticle = ({ data }) => {
  return (
    <div className={styles.singeArticle}>
      <TransitionLink to={"/blog/"}>
        <div className="">{data.sanityBlogPost.author.name}</div>

        <div id="mybox">
          <div>
            <GatsbyImage
              image={data.sanityBlogPost.mainImage.asset.gatsbyImageData}
              alt="test"
              //   className={styles.myimg}
              id="myimg"
              // className="myimg fill"
            />
          </div>
          <div className={styles.uncover}>
            <div className={styles.uncover_slice} id="uncover_slice"></div>
            <div
              className={styles.uncover_slice}
              id="uncover_slice"
              //   ref={uncoverRef}
            ></div>
            <div
              className={styles.uncover_slice}
              id="uncover_slice"
              //   ref={uncoverRef}
            ></div>
          </div>
        </div>
      </TransitionLink>
      <div className={styles.articles__text}>
        <div className={styles.articles__title}>
          {data.sanityBlogPost.mainImage.title}
        </div>
        {data.sanityBlogPost.introduction.map((intro, i) => (
          <div
            key={intro._key}
            className={
              i % 2 != 0 ? styles.articles__slim : styles.articles__wide
            }
          >
            <BlockContent blocks={intro} />
            {i < data.sanityBlogPost.introduction.length - 1 && (
              <div className={styles.articles__lineholder}>
                <div className={styles.articles__line}></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleArticle;

export const query = graphql`
  query ($id: String!) {
    sanityBlogPost(id: { eq: $id }) {
      title
      author {
        name
      }
      slug {
        current
      }
      mainImage {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
      introduction {
        children {
          text
          marks
          _type
          _key
        }
        _key
        _type
        list
        style
      }
    }
  }
`;
