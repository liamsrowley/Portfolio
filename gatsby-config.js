module.exports = {

  siteMetadata: {
    title: 'Liam Rowley | Portfolio',
    description: 'Portfolio of Liam Rowley, front-end web developer specialising in React development.',
    author: 'Liam Rowley'
  },

  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}
