import React from 'react'
import { IoIosMenu, IoIosClose, IoLogoGithub } from 'react-icons/io'

import Nav from '../nav/nav'
import Button from '../button/button'

import styles from './style.module.scss'

export default () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <p className={styles.logo}>Liam Rowley</p>
        <Nav
          breakpoint="720"
          navContent={
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>}
          MenuIcon={IoIosMenu}
          CloseIcon={IoIosClose}
        />
      </div>
      <div className={styles.headerRight}>
        <Button icon={<IoLogoGithub />} variant="contrasted">GitHub</Button>
      </div>
    </header>
  )
}
