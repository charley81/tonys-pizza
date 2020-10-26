require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Tonys Pizza',
    siteUrl: 'https://tonyspizza.xyz',
    description: 'Local NY style pizzeria in Stockbridge, Ga',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif'],
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `1gg6xysp`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
