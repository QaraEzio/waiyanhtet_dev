import { useState, useEffect } from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

export const FloatingNav = () => {
  const { isDark } = useThemeStore();
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element =
          section === 'home'
            ? document.querySelector('section')
            : document.getElementById(section);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(id);
  };

  return (
    <>
      {/* Desktop Navigation - Vertical on right side */}
      <nav
        className={`fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 lg:gap-6 p-3 lg:p-4 rounded-full ${
          isDark
            ? 'bg-gray-900/80 backdrop-blur-xl border border-pink-500/30'
            : 'bg-white/80 backdrop-blur-xl border border-purple-200 shadow-2xl'
        }`}
      >
      {navItems.map(({ id, icon: Icon, label }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative"
            aria-label={label}
          >
            {/* Dot indicator */}
            <div
              className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? isDark
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/50 scale-110'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg scale-110'
                  : isDark
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Icon
                className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors ${
                  isActive ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              />
            </div>

            {/* Label tooltip - hidden on mobile */}
            <span
              className={`hidden lg:block absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                isDark
                  ? 'bg-gray-800 text-white border border-pink-500/30'
                  : 'bg-white text-gray-900 border border-purple-200 shadow-lg'
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
      </nav>

      {/* Mobile Navigation - Horizontal at bottom */}
      <nav
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden flex justify-around items-center px-4 py-3 ${
          isDark
            ? 'bg-gray-900/95 backdrop-blur-xl border-t border-pink-500/30'
            : 'bg-white/95 backdrop-blur-xl border-t border-purple-200 shadow-2xl'
        }`}
      >
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex flex-col items-center gap-1 py-1 px-2"
              aria-label={label}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? isDark
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/50'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
                    : isDark
                    ? 'bg-gray-800'
                    : 'bg-gray-100'
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                />
              </div>
              <span
                className={`text-xs font-medium transition-colors ${
                  isActive
                    ? isDark
                      ? 'text-pink-400'
                      : 'text-purple-600'
                    : isDark
                    ? 'text-gray-500'
                    : 'text-gray-500'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
