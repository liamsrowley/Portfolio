import React from 'react'
import { IoIosMenu, IoIosClose, IoLogoGithub } from 'react-icons/io'

import Nav from '../nav/nav'
import Layout from '../layout/layout'
import Button from '../button/button'

import styles from './style.module.scss'

export default () => {
  return (
    <Layout>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.logo}>Liam Rowley</p>
          <Nav
            breakpoint="780"
            navContent={
              <ul>
                <li className={styles.activeLink}>Home</li>
                <li className={styles.link}>Projects</li>
                <li className={styles.link}>Contact</li>
                <div className={styles.headerRight}>
                  <Button icon={<IoLogoGithub />} variant="contrasted">GitHub</Button>
                </div>
              </ul>}
            MenuIcon={IoIosMenu}
            CloseIcon={IoIosClose}
          />
        </div>
      </header>
    </Layout>
  )
}
