import { useState, useEffect } from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { Home, User, Briefcase, Code, Mail, Menu, X } from 'lucide-react';

export const Sidebar = () => {
  const { isDark } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'projects', label: 'Projects', icon: Briefcase, href: '#projects' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = section === 'home' 
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

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 left-6 z-50 p-3 rounded-full transition-all duration-300 lg:hidden ${
          isDark
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
            : 'bg-white text-gray-800 shadow-lg'
        } hover:scale-110`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen z-40 transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <nav
          className={`h-full w-72 p-8 flex flex-col ${
            isDark
              ? 'bg-gray-900/95 backdrop-blur-lg border-r border-pink-500/30'
              : 'bg-white/95 backdrop-blur-lg border-r border-purple-200 shadow-xl'
          }`}
        >
          {/* Logo/Brand */}
          <div className="mb-12">
            <div
              className={`w-16 h-16 rounded-full border-4 mb-4 ${
                isDark
                  ? 'bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 border-pink-400'
                  : 'bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 border-purple-300'
              } flex items-center justify-center text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-700'
              }`}
            >
              JD
            </div>
            <h3
              className={`text-xl font-bold ${
                isDark
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
              }`}
            >
              Jane Doe
            </h3>
            <p
              className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Full Stack Developer
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-2 flex-1">
            {navItems.map(({ id, label, icon: Icon, href }) => (
              <li key={id}>
                <a
                  href={href}
                  onClick={() => handleNavClick(href, id)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === id
                      ? isDark
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : isDark
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div
            className={`pt-6 border-t ${
              isDark ? 'border-pink-500/30' : 'border-purple-200'
            }`}
          >
            <p
              className={`text-xs text-center ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}
            >
              © 2025 Jane Doe
            </p>
          </div>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
