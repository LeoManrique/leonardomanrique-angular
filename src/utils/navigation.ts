export class NavigationUtils {
  static toggleMobileMenu(show: boolean) {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
      if (show) {
        navMenu.classList.add('show-menu');
      } else {
        navMenu.classList.remove('show-menu');
      }
    }
  }

  static closeMobileMenuOnLinkClick() {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        NavigationUtils.toggleMobileMenu(false);
      });
    });
  }

  static initializeNavigation() {
    // Close mobile menu when clicking on links
    setTimeout(() => {
      NavigationUtils.closeMobileMenuOnLinkClick();
    }, 100);
  }
}
