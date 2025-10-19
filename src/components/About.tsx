import { useThemeStore } from '../store/useThemeStore';
import { Code2, Palette, Rocket, Heart, Zap, Star } from 'lucide-react';

export const About = () => {
  const { isDark } = useThemeStore();

  return (
    <section
      id="about"
      className={`py-20 px-6 lg:px-20 transition-colors duration-500 ${
        isDark
          ? 'bg-gray-900'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Creative title with rotation */}
        <div className="mb-16 text-center">
          <h2
            className={`text-5xl lg:text-7xl font-bold inline-block ${
              isDark
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'
            }`}
          >
            About Me
          </h2>
          <div
            className={`h-2 w-32 mx-auto mt-4 rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-cyan-400 to-blue-400'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
            }`}
          />
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Large text card - spans 2 columns */}
          <div
            className={`md:col-span-2 p-8 rounded-3xl ${
              isDark
                ? 'bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/30'
                : 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-indigo-100'
            } hover:scale-[1.02] transition-transform duration-300`}
          >
            <h3
              className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-cyan-400' : 'text-indigo-600'
              }`}
            >
              Hello! 👋
            </h3>
            <p
              className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              I'm a passionate full-stack developer and designer with a love for
              creating beautiful, functional web experiences. I believe in the
              power of design to solve real problems and create meaningful
              connections.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              When I'm not coding, you'll find me exploring new design trends,
              contributing to open-source, or enjoying a good cup of coffee ☕
            </p>
          </div>

          {/* Stats card with gradient */}
          <div
            className={`p-8 rounded-3xl relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-pink-500 to-purple-500 text-white'
                : 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
            } hover:scale-[1.02] transition-transform duration-300`}
          >
            <Star className="w-12 h-12 mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">99%</div>
            <div className="text-lg opacity-90">Client Satisfaction</div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          </div>

          {/* Icon card */}
          <div
            className={`p-8 rounded-3xl ${
              isDark
                ? 'bg-gray-800/50 backdrop-blur-sm border border-pink-500/30'
                : 'bg-white border border-pink-100 shadow-xl'
            } hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center justify-center text-center`}
          >
            <Code2
              className={`w-16 h-16 mb-4 ${
                isDark ? 'text-pink-400' : 'text-purple-600'
              }`}
            />
            <h4
              className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Clean Code
            </h4>
            <p
              className={`text-sm mt-2 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Writing maintainable & efficient code
            </p>
          </div>

          {/* Another icon card */}
          <div
            className={`p-8 rounded-3xl ${
              isDark
                ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30'
                : 'bg-white border border-cyan-100 shadow-xl'
            } hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center justify-center text-center`}
          >
            <Palette
              className={`w-16 h-16 mb-4 ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}
            />
            <h4
              className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Beautiful Design
            </h4>
            <p
              className={`text-sm mt-2 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Creating stunning interfaces
            </p>
          </div>

          {/* Experience card - rotated */}
          <div
            className={`p-8 rounded-3xl relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white'
                : 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white'
            } hover:scale-[1.02] transition-transform duration-300`}
          >
            <Zap className="w-12 h-12 mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">5+</div>
            <div className="text-lg opacity-90">Years Experience</div>
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          </div>

          {/* Passion card - spans 2 columns on larger screens */}
          <div
            className={`lg:col-span-2 p-8 rounded-3xl ${
              isDark
                ? 'bg-gray-800/50 backdrop-blur-sm border border-purple-500/30'
                : 'bg-white border border-purple-100 shadow-xl'
            } hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className="flex items-start gap-6">
              <div
                className={`p-4 rounded-2xl ${
                  isDark
                    ? 'bg-gradient-to-br from-pink-500 to-purple-500'
                    : 'bg-gradient-to-br from-purple-500 to-pink-500'
                }`}
              >
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4
                  className={`text-2xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  What I Love
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Problem Solving', 'UI/UX Design', 'Open Source', 'Learning', 'Innovation'].map(
                    (item, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          isDark
                            ? 'bg-purple-500/30 text-purple-300'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Final icon card */}
          <div
            className={`p-8 rounded-3xl ${
              isDark
                ? 'bg-gray-800/50 backdrop-blur-sm border border-blue-500/30'
                : 'bg-white border border-blue-100 shadow-xl'
            } hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center justify-center text-center`}
          >
            <Rocket
              className={`w-16 h-16 mb-4 ${
                isDark ? 'text-blue-400' : 'text-indigo-600'
              }`}
            />
            <h4
              className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Fast Performance
            </h4>
            <p
              className={`text-sm mt-2 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Optimizing for speed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
