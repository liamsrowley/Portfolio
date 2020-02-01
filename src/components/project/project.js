import React from 'react'

import Button from '../button/button'
import Note from '../note/note'

import styles from './style.module.scss'

export default ({ title, description, slug, imgSrc, siteUrl, sourceUrl, requiresLoading, techUsed }) => {
  return (
    <article className={styles.project}>
      <div
        className={styles.projectImage}
        style={{
          background: `url(/${imgSrc})`
        }}
      />
      <h3 className={styles.title}>{title}</h3>
      <span>{techUsed}</span>
      <p className={styles.description}>{description}</p>
      <div className={styles.actions}>
        <div className={styles.mainAction}>
          <a href={siteUrl} target="_blank" rel="noopener noreferrer" className={!siteUrl ? styles.disabled : undefined}>
            <Button>View Site</Button>
          </a>
        </div>
        <div className={styles.sideActions}>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined">Source Code</Button>
          </a>
        </div>
        { requiresLoading && <Note>Site will take a moment to load while server spins up.</Note> }
      </div>
    </article>
  )
}
