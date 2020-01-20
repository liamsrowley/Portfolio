import React from 'react'

import Layout from '../layout/layout'

import styles from './style.module.scss'

export default ({ title }) => {
  return (
    <div className={styles.hero}>
      <Layout>
        <h1 className={styles.heroTitle}>{title}</h1>
      </Layout>
    </div>
  )
}
