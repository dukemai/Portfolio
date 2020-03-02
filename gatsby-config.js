const autoprefixer = require("autoprefixer");

module.exports = {
  siteMetadata: {
    title: "International Sanctions"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/settings`,
        name: "settings"
      }
    },
    "gatsby-transformer-remark"
  ]
};
