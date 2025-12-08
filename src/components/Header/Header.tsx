import React from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">Leonardo</a>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Header
