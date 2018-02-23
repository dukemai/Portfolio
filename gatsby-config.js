const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'International Sanctions',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          }),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/pages`,
          name: 'markdown-pages',
        },
      },
    },
  ],
}

