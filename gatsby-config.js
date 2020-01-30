module.exports = {

  siteMetadata: {
    title: 'Liam Rowley',
    description: 'Portfolio of Liam Rowley, front-end web developer specialising in React development.',
    author: 'Liam Rowley'
  },

  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'roboto\:400,500,600,700',
          'roboto slab\:500,600,700'
        ]
      }
    }
  ]
}
