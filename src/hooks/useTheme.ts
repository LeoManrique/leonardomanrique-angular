import { useEffect, useState } from 'react';

const THEME_KEY = 'selected-theme';
const DARK_THEME = 'dark-theme';

const getInitialTheme = (): boolean => {
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    return savedTheme === 'dark';
  }

  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return false;
  }

  // Default to dark mode if no preference detected
  return true;
};

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    // Apply theme to body
    if (isDark) {
      document.body.classList.add(DARK_THEME);
    } else {
      document.body.classList.remove(DARK_THEME);
    }

    // Save to localStorage
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return { isDark, toggleTheme };
};
