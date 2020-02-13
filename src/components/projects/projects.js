import React from 'react'

import Project from '../project/project'

import styles from './style.module.scss'

export default ({ projects }) => {
  return (
    <section className={styles.projects}>
      { projects.map(({ node }) => {
        const { title, excerpt, requiresLoading, imageUrl, sourceUrl, siteUrl } = node.frontmatter
        return (
          <Project
            key={node.id}
            title={title}
            description={excerpt}
            requiresLoading={requiresLoading}
            imgSrc={imageUrl}
            slug={node.fields.slug}
            siteUrl={siteUrl}
            sourceUrl={sourceUrl}
          />
        )
      })}
    </section>
  )
}
