import React from 'react'

import styles from './style.module.scss'

export default ({ children }) => {
  return <span className={styles.note}>{children}</span>
}
