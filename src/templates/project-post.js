import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Contact from '../components/contact/contact'
import Layout from '../components/layout/layout'
import Button from '../components/button/button'
import Note from '../components/note/note'
import SEO from '../components/seo/seo'

import styles from './style.module.scss'

export default ({ data }) => {
  const { title, excerpt, requiresLoading, imageUrl } = data.markdownRemark.frontmatter;
  return (
    <div>
      <SEO title={title} description={excerpt} />
      <Header />
      <Hero title={title} size="small" />
      <Layout>
        <div style={{ background: `url(/${imageUrl})` }} className={styles.projectImage} />
        <section className={styles.section}>
          <main className={styles.main}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{excerpt}</p>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </main>
          <aside className={styles.actions}>
            <Button>Source Code</Button>
            <Button variant="outlined">View Site</Button>
            { requiresLoading && <Note>Site will take a moment to load while server spins up.</Note> }
          </aside>
        </section>
      </Layout>
      <Contact />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        excerpt
        requiresLoading
        isFeatured
        imageUrl
        sourceUrl
        siteUrl
      }
    }
  }
`
