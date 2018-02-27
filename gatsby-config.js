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
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/settings`,
        name: 'settings',
      },
    },

  ],
}

