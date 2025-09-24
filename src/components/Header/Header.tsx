import React, { useEffect } from 'react'
import { NavigationUtils } from '../../utils/navigation'

const Header: React.FC = () => {
  useEffect(() => {
    NavigationUtils.initializeNavigation();

    // Handle mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    const handleToggleOpen = () => NavigationUtils.toggleMobileMenu(true);
    const handleToggleClose = () => NavigationUtils.toggleMobileMenu(false);

    if (navToggle) {
      navToggle.addEventListener('click', handleToggleOpen);
    }

    if (navClose) {
      navClose.addEventListener('click', handleToggleClose);
    }

    // Cleanup event listeners
    return () => {
      if (navToggle) {
        navToggle.removeEventListener('click', handleToggleOpen);
      }
      if (navClose) {
        navClose.removeEventListener('click', handleToggleClose);
      }
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">Leonardo</a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-graduation-cap nav__icon"></i> Qualification
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" id="nav-close"></i>
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
