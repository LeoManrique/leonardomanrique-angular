import { useEffect } from 'react';

export const useScrollEffects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Change background header
      if (header) {
        if (scrollTop >= 80) {
          header.classList.add('scroll-header');
        } else {
          header.classList.remove('scroll-header');
        }
      }

      // Show scroll up button
      const scrollUp = document.getElementById('scroll-up');
      if (scrollUp) {
        if (scrollTop >= 560) {
          scrollUp.classList.add('show-scroll');
        } else {
          scrollUp.classList.remove('show-scroll');
        }
      }

      // Activate nav links based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(current => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollTop > sectionTop && scrollTop <= sectionTop + sectionHeight) {
          sectionsClass?.classList.add('active-link');
        } else {
          sectionsClass?.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
