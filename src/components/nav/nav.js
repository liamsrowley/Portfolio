import React, { useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'

export default ({ navContent, breakpoint, MenuIcon, CloseIcon }) => {

  const [width] = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)
  const renderMenuIcon = width <= breakpoint ? true : false

  const renderMobileMenu = () => {
    return (
      <div>
        <CloseIcon onClick={toggleMenu} />
        { navContent }
      </div>
    )
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav>
        { !renderMenuIcon && navContent }
      </nav>
      { renderMenuIcon && <MenuIcon onClick={toggleMenu} /> }
      { isOpen && renderMenuIcon && renderMobileMenu() }
    </div>
  )

}
