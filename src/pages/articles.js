import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import BlockContent from "@sanity/block-content-to-react";
import * as styles from "../styles/articles.module.scss";

const articles = ({ data }) => {
  const blogposts = data.allSanityBlogPost.nodes;
  return (
    <div className={styles.articles}>
      <div className={styles.articles__header}>Kurs Maleri 1</div>
      <div className={styles.articles__subheader}>BLOGG</div>

      {blogposts.map((blog, index) => (
        <div key={index} className={styles.articles__post}>
          <div>{blog.title}</div>
          {blog.introduction.map((intro) => (
            <BlockContent key={intro._key} blocks={intro} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default articles;

export const query = graphql`
  {
    allSanityBlogPost {
      nodes {
        title
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
  }
`;
