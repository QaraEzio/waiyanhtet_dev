import { useThemeStore } from '../store/useThemeStore';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  const { isDark } = useThemeStore();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with real-time inventory',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: isDark
        ? 'from-pink-500 via-rose-500 to-red-500'
        : 'from-pink-400 via-rose-400 to-red-400',
      size: 'large', // Will span more space
    },
    {
      title: 'Design System',
      description: 'Enterprise component library',
      tags: ['React', 'TypeScript', 'Storybook'],
      gradient: isDark
        ? 'from-purple-500 via-indigo-500 to-blue-500'
        : 'from-purple-400 via-indigo-400 to-blue-400',
      size: 'medium',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform',
      tags: ['Vue.js', 'D3.js', 'Firebase'],
      gradient: isDark
        ? 'from-cyan-500 via-blue-500 to-indigo-500'
        : 'from-cyan-400 via-blue-400 to-indigo-400',
      size: 'medium',
    },
    {
      title: 'Social Media App',
      description: 'Connect and share with beautiful interface',
      tags: ['React Native', 'GraphQL', 'AWS'],
      gradient: isDark
        ? 'from-yellow-500 via-orange-500 to-red-500'
        : 'from-yellow-400 via-orange-400 to-red-400',
      size: 'small',
    },
    {
      title: 'AI Content Generator',
      description: 'Leverage AI for engaging content creation',
      tags: ['Next.js', 'OpenAI', 'Prisma'],
      gradient: isDark
        ? 'from-green-500 via-emerald-500 to-teal-500'
        : 'from-green-400 via-emerald-400 to-teal-400',
      size: 'small',
    },
    {
      title: 'Portfolio Builder',
      description: 'Create stunning portfolios effortlessly',
      tags: ['React', 'Tailwind', 'Supabase'],
      gradient: isDark
        ? 'from-pink-500 via-purple-500 to-indigo-500'
        : 'from-pink-400 via-purple-400 to-indigo-400',
      size: 'large',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-6 lg:px-20 transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900'
          : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Creative title */}
        <div className="mb-16 text-center">
          <h2
            className={`text-5xl lg:text-7xl font-bold inline-block ${
              isDark
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
            }`}
          >
            Featured Work
          </h2>
          <div
            className={`h-2 w-32 mx-auto mt-4 rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-pink-400 to-purple-400'
                : 'bg-gradient-to-r from-purple-600 to-pink-600'
            }`}
          />
        </div>

        {/* Masonry/Creative grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                project.size === 'large'
                  ? 'md:col-span-2 md:row-span-2'
                  : project.size === 'medium'
                  ? 'md:row-span-2'
                  : ''
              } ${
                isDark
                  ? 'bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20'
                  : 'bg-white shadow-xl hover:shadow-2xl border border-purple-100'
              }`}
            >
              {/* Gradient header */}
              <div
                className={`h-48 ${
                  project.size === 'large' ? 'md:h-64' : ''
                } bg-gradient-to-br ${
                  project.gradient
                } p-8 flex items-end relative overflow-hidden`}
              >
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
                
                <h3 className="text-3xl font-bold text-white relative z-10">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p
                  className={`text-lg ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDark
                          ? 'bg-purple-500/30 text-purple-300'
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href="#"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all group/btn ${
                      isDark
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:shadow-pink-500/50'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                    }`}
                  >
                    <span>View Live</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className={`p-2 rounded-xl transition-all ${
                      isDark
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
