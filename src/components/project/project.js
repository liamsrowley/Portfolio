import React from 'react'

import Button from '../button/button'

import styles from './style.module.scss'

export default ({ title, description, srcLink, siteLink, readMoreLink, imgSrc }) => {
  return (
    <article className={styles.project}>
      <div className={styles.projectImage} style={{
          background: `url(/images/${imgSrc})`
        }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.actions}>
        <div className={styles.mainAction}>
          <Button>View Site</Button>
        </div>
        <div className={styles.sideActions}>
          <Button variant="outlined">Read More</Button>
          <Button variant="outlined">Source Code</Button>
        </div>
      </div>
    </article>
  )
}
