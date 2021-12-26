import React from "react";
import { graphql } from "gatsby";
import * as styles from "../styles/articles.module.scss";
import Blogpost from "../components/Blogpost/Blogpost";

export default function Blog({ data }) {
  const blogposts = data.allSanityBlogPost.nodes;

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
          <div className={styles.articles__darkmode}>Darkmode</div>
        </div>
      </div>

      {/* <div className={styles.grid}> */}
      {blogposts.map((blog, index) => {
        <Blogpost
          key={blog.slug._key}
          index={index}
          width={index < 2 ? "50%" : "33%"}
          // blog={blog}
          slug={blog.slug.current}
          image={blog.mainImage.asset.gatsbyImageData}
          published={blog.publishedAt}
          title={blog.title}
        />;
      })}
      {/* </div> */}
    </div>
  );
}

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
