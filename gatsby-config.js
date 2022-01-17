module.exports = {
  siteMetadata: {
    title: "My gatsby gallery",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-transition-link",
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
