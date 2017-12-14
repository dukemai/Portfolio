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
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '6ekpxi8ri32c',
        accessToken: 'f461aa7efc61ac1ecdc31726c9193757c762a7fd0ee5a85bb42b66de3056dc82',
      },
    },
  ],
}
