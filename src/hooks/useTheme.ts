import { useEffect, useState } from 'react';

const THEME_KEY = 'selected-theme';
const DARK_THEME = 'dark-theme';

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage on mount
    const savedTheme = localStorage.getItem(THEME_KEY);
    return savedTheme === 'dark';
  });

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
