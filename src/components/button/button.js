import React from 'react'

import styles from './style.module.scss'

export default ({ children, onClick, icon, variant, size }) => {

  let buttonStyle

  if (variant === 'contrasted') {
    buttonStyle = styles.button + ' ' + styles.buttonContrasted
  } else if (variant === 'outlined') {
    buttonStyle = styles.button + ' ' + styles.buttonOutlined
  } else if (variant === 'darkest') {
    buttonStyle = styles.button + ' ' + styles.buttonDarkest
  } else {
    buttonStyle = styles.button
  }

  if (size === 'large') {
    buttonStyle += ' ' + styles.buttonLarge
  }

  return (
    <button onClick={onClick} className={buttonStyle}>
      { icon && <span className={styles.iconContainer}>{icon}</span> }
      {children}
    </button>
  )
}
