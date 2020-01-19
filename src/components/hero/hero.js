import React from 'react'

import styles from './style.module.scss'

export default ({ title }) => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>{title}</h1>
    </div>
  )
}
