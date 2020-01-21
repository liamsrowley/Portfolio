import React from 'react'

import styles from './style.module.scss'

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

export default ({ children }) => {
  return (
    <div className={styles.wrapper}>
      { children }
    </div>
  )
}
