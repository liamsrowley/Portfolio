import React from 'react'

import Button from '../button/button'

import styles from './style.module.scss'

export default ({ title, description, srcLink, siteLink, readMoreLink, imgSrc, requiresLoading }) => {
  return (
    <article className={styles.project}>
      <div className={styles.projectImage} style={{
          background: `url(/images/${imgSrc})`
        }} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.actions}>
        <div className={styles.mainAction}>
          <Button>View Site</Button>
        </div>
        <div className={styles.sideActions}>
          <Button variant="outlined">Read More</Button>
          <Button variant="outlined">Source Code</Button>
        </div>
        { requiresLoading && <span className={styles.loadWarning}>Site will take a moment to load while server spins up.</span> }
      </div>
    </article>
  )
}
