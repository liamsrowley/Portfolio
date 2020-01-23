import React from 'react'

import Layout from '../layout/layout'

import styles from './style.module.scss'

export default ({ title, size }) => {
  const divStyle = size === 'small' ? styles.hero + ' ' + styles.heroSmall : styles.hero;
  return (
    <div className={divStyle}>
      <Layout>
        <h1 className={styles.heroTitle}>{title}</h1>
      </Layout>
    </div>
  )
}
