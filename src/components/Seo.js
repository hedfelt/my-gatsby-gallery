import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

export const Seo = ({ title }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaTitle = title || data.site.siteMetadata.title;

        return (
          <Helmet
            htmlAttributes={{
              lang: "en",
            }}
            title={title}
            meta={[{ property: `og:title`, content: metaTitle }]}
          ></Helmet>
        );
      }}
    ></StaticQuery>
  );
};

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
