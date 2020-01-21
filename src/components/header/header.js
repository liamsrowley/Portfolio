import React from 'react'
import { Link } from 'gatsby'
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
                <Link to="/" className={styles.link} activeClassName={styles.activeLink}>Home</Link>
                <Link to="#projects" className={styles.link}>Projects</Link>
                <Link to="#contact" className={styles.link}>Contact</Link>
                <div className={styles.headerRight}>
                  <a href="https://github.com/liamsrowley?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <Button icon={<IoLogoGithub />} variant="contrasted">
                      GitHub
                    </Button>
                  </a>
                </div>
              </ul>
            }
            MenuIcon={IoIosMenu}
            CloseIcon={IoIosClose}
          />
        </div>
      </header>
    </Layout>
  )
}
