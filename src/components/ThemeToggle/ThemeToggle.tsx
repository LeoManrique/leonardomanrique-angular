import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <i
      className={`uil ${isDark ? 'uil-sun' : 'uil-moon'} change-theme`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleTheme();
        }
      }}
    />
  );
};

export default ThemeToggle;
