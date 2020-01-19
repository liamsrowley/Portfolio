import React from 'react'

import styles from './style.module.scss'

export default ({ children, onClick, icon, variant }) => {

  let buttonStyle

  if (variant === 'contrasted') {
    buttonStyle = styles.button + ' ' + styles.buttonContrasted
  } else if (variant === 'outlined') {
    buttonStyle = styles.button + ' ' + styles.buttonOutlined
  } else {
    buttonStyle = styles.button
  }

  return (
    <button onClick={onClick} className={buttonStyle}>
      { icon && <span className={styles.iconContainer}>{icon}</span> }
      {children}
    </button>
  )
}
