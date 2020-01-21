import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Projects from '../components/projects/projects'
import About from '../components/about/about'
import Layout from '../components/layout/layout'
import Contact from '../components/contact/contact'
import '../style/reset.scss'

export default ({ data }) => {
  console.log(data.allMarkdownRemark.edges)
  return (
    <div>
      <Header />
      <Hero title="I'm a front-end web developer using the power of modern
        HTML, CSS and React to create intuitive web apps." />
      <Layout>
        <Projects projects={data.allMarkdownRemark.edges} />
        <About />
      </Layout>
      <Contact />
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {isFeatured: {eq: true}}}) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            requiresLoading
            isFeatured
            imageUrl
            sourceUrl
            siteUrl
          }
          html
          fields {
            slug
          }
          id
        }
      }
    }
  }
`
