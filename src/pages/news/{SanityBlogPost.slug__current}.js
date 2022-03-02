import React from "react";
import { graphql } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../../styles/news.module.scss";
import { PortableText } from "@portabletext/react";
import { Link } from "gatsby";
import { Footer } from "../../components/Footer/Footer";
import { motion } from "framer-motion";

import { Seo } from "../../components/Seo";
import ReturnLink from "../../components/ReturnLink/ReturnLink";

const myPortableTextComponents = {
  block: {
    paragraph: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => (
      <div className={styles.singleArticle__quoteholder}>
        <div className={styles.singleArticle__verticallineholder}>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.singleArticle__blockquoteline}
          ></motion.div>
        </div>
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.singleArticle__blockquote}
        >
          {children}
        </motion.blockquote>
        <div className={styles.singleArticle__verticallineholder}>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.singleArticle__blockquoteline}
          ></motion.div>
        </div>
      </div>
    ),
  },

  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,

    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a
          href={value.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.singleArticle__link}
        >
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }) => {
      return (
        <Link
          to={"/news/" + value.reference.slug.current}
          className={styles.singleArticle__link}
        >
          {children}
        </Link>
      );
    },
  },
};

export default function SingleArticle({ data }) {
  return (
    <div className={styles.singleArticle}>
      <Seo title={"Hanne Edfelt - " + data.sanityBlogPost.title} />
      <div className={styles.singleArticle__wrapper}>
        <ReturnLink to={"/news/"}>{"Return to News"}</ReturnLink>
        <h1 className={styles.singleArticle__title}>
          {data.sanityBlogPost.title}
        </h1>
        <div className={styles.singleArticle__linewrapper}>
          {data.sanityBlogPost.publishedAt}
          <div className={styles.singleArticle__line}></div>
          {data.sanityBlogPost.tags.map((tag, index) => (
            <div key={index} className="">
              {(index ? ", " : "") + tag.name}
            </div>
          ))}
        </div>
        <div className={styles.singleArticle__imagewrapper}>
          <GatsbyImage
            image={data.sanityBlogPost.mainImage.asset.gatsbyImageData}
            alt="test"
            id="myimg"
            className={styles.singleArticle__image}
          />
          <div className={styles.singleArticle__imagetext}>
            <PortableText
              value={data.sanityBlogPost.introduction}
              components={myPortableTextComponents}
            />
          </div>
        </div>
        <div className={styles.singleArticle__contentwrapper}>
          <PortableText
            value={data.sanityBlogPost._rawContent}
            components={myPortableTextComponents}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query ($id: String!) {
    sanityBlogPost(id: { eq: $id }) {
      publishedAt(formatString: "MMMM D, YYYY")
      title

      tags {
        name
      }
      title
      author {
        name
      }
      slug {
        current
      }
      introduction {
        children {
          marks
          text
          _key
          _type
        }
        list
        style
        _key
        _type
        _rawChildren
      }
      mainImage {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }

      _rawContent(resolveReferences: { maxDepth: 5 })
    }
  }
`;
