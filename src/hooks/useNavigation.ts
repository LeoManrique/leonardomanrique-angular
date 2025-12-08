import { useEffect, useCallback } from 'react';

export const useNavigation = () => {
  const toggleMobileMenu = useCallback((show: boolean) => {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
      if (show) {
        navMenu.classList.add('show-menu');
      } else {
        navMenu.classList.remove('show-menu');
      }
    }
  }, []);

  useEffect(() => {
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    const handleToggleOpen = () => toggleMobileMenu(true);
    const handleToggleClose = () => toggleMobileMenu(false);
    const handleLinkClick = () => toggleMobileMenu(false);

    // Add event listeners
    if (navToggle) {
      navToggle.addEventListener('click', handleToggleOpen);
    }

    if (navClose) {
      navClose.addEventListener('click', handleToggleClose);
    }

    navLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup function to remove all event listeners
    return () => {
      if (navToggle) {
        navToggle.removeEventListener('click', handleToggleOpen);
      }
      if (navClose) {
        navClose.removeEventListener('click', handleToggleClose);
      }
      navLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [toggleMobileMenu]);

  return { toggleMobileMenu };
};
