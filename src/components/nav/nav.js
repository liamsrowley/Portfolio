import React, { useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'

import styles from './style.module.scss'

export default ({ navContent, breakpoint, MenuIcon, CloseIcon }) => {

  const [width] = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)
  const renderMenuIcon = width <= breakpoint ? true : false

  const renderMobileMenu = () => {
    return (
      <div className={styles.mobileNav}>
        <CloseIcon onClick={toggleMenu} />
        { navContent }
      </div>
    )
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        { !renderMenuIcon && navContent }
      </nav>
      { renderMenuIcon && <MenuIcon onClick={toggleMenu} /> }
      { isOpen && renderMenuIcon && renderMobileMenu() }
    </div>
  )

}
