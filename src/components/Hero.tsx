import { useThemeStore } from '../store/useThemeStore';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export const Hero = () => {
  const { isDark } = useThemeStore();

  return (
    <section
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900'
          : 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50'
      }`}
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-30 animate-float ${
            isDark
              ? 'bg-gradient-to-r from-pink-500 to-purple-500'
              : 'bg-gradient-to-r from-pink-200 to-purple-200'
          }`}
        />
        <div
          className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
              : 'bg-gradient-to-r from-blue-200 to-cyan-200'
          }`}
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative min-h-screen flex items-center px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto w-full">
          {/* Left side - Text content with asymmetric layout */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles
                  className={`w-6 h-6 ${
                    isDark ? 'text-pink-400' : 'text-purple-600'
                  }`}
                />
                <span
                  className={`text-sm font-medium uppercase tracking-wider ${
                    isDark ? 'text-cyan-400' : 'text-purple-600'
                  }`}
                >
                  Creative Developer
                </span>
              </div>

              <h1
                className={`text-6xl lg:text-8xl font-bold leading-tight ${
                  isDark
                    ? 'text-white'
                    : 'text-gray-900'
                }`}
              >
                Hi, I'm{' '}
                <span
                  className={`block mt-2 ${
                    isDark
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600'
                  }`}
                >
                  Wai Yan Htet
                </span>
              </h1>

              <p
                className={`text-xl lg:text-2xl max-w-lg ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Crafting digital experiences that blend creativity with
                functionality. From concept to code, I bring ideas to life.
              </p>
            </div>

            {/* Social links with unique style */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#', color: isDark ? 'from-pink-500 to-purple-500' : 'from-purple-500 to-pink-500' },
                { icon: Linkedin, href: '#', color: isDark ? 'from-purple-500 to-cyan-500' : 'from-blue-500 to-purple-500' },
                { icon: Mail, href: '#contact', color: isDark ? 'from-cyan-500 to-blue-500' : 'from-cyan-500 to-blue-500' },
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`group relative p-4 rounded-2xl transition-all duration-300 hover:scale-110 ${
                    isDark
                      ? 'bg-gray-800/50 backdrop-blur-sm border border-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/30'
                      : 'bg-white/80 backdrop-blur-sm border border-purple-200 hover:shadow-2xl'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity blur`} />
                  <Icon className={`w-6 h-6 relative z-10 ${isDark ? 'text-white' : 'text-gray-700'} group-hover:text-white transition-colors`} />
                </a>
              ))}
            </div>

            {/* CTA Button with unique style */}
            <div className="pt-4">
              <a
                href="#projects"
                className={`inline-block px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70'
                    : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white shadow-2xl hover:shadow-3xl'
                }`}
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right side - Creative profile with asymmetric design */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Large decorative circle */}
              <div
                className={`w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full border-4 relative overflow-hidden ${
                  isDark
                    ? 'bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 border-pink-400 backdrop-blur-xl'
                    : 'bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 border-purple-300 backdrop-blur-xl'
                } animate-float`}
              >
                {/* Profile initials with creative positioning */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`text-9xl font-bold ${
                      isDark
                        ? 'text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-cyan-400'
                        : 'text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600'
                    }`}
                  >
                    <img className='w-full h-full' src="../src/assets/2025-07-02 4.40.50 PM.jpg" alt="" />
                  </span>
                </div>
              </div>

              {/* Floating info cards */}
              <div
                className={`absolute -top-4 -right-4 p-4 rounded-2xl ${
                  isDark
                    ? 'bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-2xl shadow-pink-500/50'
                    : 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-2xl'
                } animate-float`}
                style={{ animationDelay: '0.5s' }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm opacity-90">Years</div>
                </div>
              </div>

              <div
                className={`absolute -bottom-4 -left-4 p-4 rounded-2xl ${
                  isDark
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-2xl shadow-cyan-500/50'
                    : 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-2xl'
                } animate-float`}
                style={{ animationDelay: '1s' }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
