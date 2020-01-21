import React from 'react'
import { Link } from 'gatsby'

import Button from '../button/button'

import styles from './style.module.scss'

export default ({ title, description, slug, imgSrc, siteUrl, sourceUrl, requiresLoading }) => {
  return (
    <article className={styles.project}>
      <div className={styles.projectImage} style={{
          background: `url(/images/${imgSrc})`
        }} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.actions}>
        <div className={styles.mainAction}>
          <a href={siteUrl} target="_blank" rel="noopener noreferrer">
            <Button>View Site</Button>
          </a>
        </div>
        <div className={styles.sideActions}>
          <Link to={slug}>
            <Button variant="outlined">Read More</Button>
          </Link>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined">Source Code</Button>
          </a>
        </div>
        { requiresLoading && <span className={styles.loadWarning}>Site will take a moment to load while server spins up.</span> }
      </div>
    </article>
  )
}
