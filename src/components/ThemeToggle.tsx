import { useThemeStore } from '../store/useThemeStore';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50'
          : 'bg-white text-gray-800 shadow-lg'
      } hover:scale-110`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};
