module.exports = {
  siteMetadata: {
    title: "Hanne Edfelt website",
    description: "A gallery and blog built with Gatsby and Sanity ",
    url: "https://www.google.com/",
    copyright: "This website is copyright 2022 Hanne Edfelt",
    lang: "en",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout/Layout.js`),
      },
    },

    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `b22iau7s`,
        dataset: `production`,
        watchMode: true,
      },
    },
  ],
};
