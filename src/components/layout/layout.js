import React from 'react'

import styles from './style.module.scss'

export default ({ children }) => {
  return (
    <div className={styles.wrapper}>
      { children }
    </div>
  )
}
