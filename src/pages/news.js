import React from "react";
import { graphql } from "gatsby";
import * as styles from "../styles/news.module.scss";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage } from "gatsby-plugin-image";
import ImageGallery from "../components/ImageGallery/ImageGallery";

export default function News({ data }) {
  const blogposts = data.allSanityBlogPost.nodes;

  console.log(blogposts);

  return (
    <div className={styles.news}>
      <ImageGallery items={blogposts} />
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
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`;
