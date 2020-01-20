import React from 'react'

import styles from './style.module.scss'

export default ({ title, items }) => {
  return (
    <div className={styles.skillGroup}>
      <span className={styles.label}>{title}</span>
      <div className={styles.items}>
        { items.map((item, i) => <div key={i} className={styles.item}>{item}</div>)}
      </div>
    </div>
  );
}
