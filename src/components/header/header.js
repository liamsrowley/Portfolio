import React from 'react'
import { IoIosMenu, IoIosClose, IoLogoGithub } from 'react-icons/io'

import Nav from '../nav/nav'
import Button from '../button/button'

export default () => {
  return (
    <header>
      <div>
        <p>Liam Rowley</p>
        <Nav
          breakpoint="1280"
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
      <div>
        <Button icon={<IoLogoGithub />} variant="contrasted">GitHub</Button>
      </div>
    </header>
  )
}
