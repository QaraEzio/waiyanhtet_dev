import { useThemeStore } from '../store/useThemeStore';

interface Skill {
  name: string;
  percentage: number;
  color: {
    light: string;
    dark: string;
    gradient: string;
  };
}

export const Skills = () => {
  const { isDark } = useThemeStore();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { 
          name: 'React', 
          percentage: 95,
          color: {
            light: 'from-cyan-500 to-blue-500',
            dark: 'from-cyan-400 to-blue-400',
            gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500'
          }
        },
        { 
          name: 'TypeScript', 
          percentage: 90,
          color: {
            light: 'from-blue-500 to-indigo-500',
            dark: 'from-blue-400 to-indigo-400',
            gradient: 'bg-gradient-to-r from-blue-500 to-indigo-500'
          }
        },
        { 
          name: 'Next.js', 
          percentage: 85,
          color: {
            light: 'from-purple-500 to-pink-500',
            dark: 'from-purple-400 to-pink-400',
            gradient: 'bg-gradient-to-r from-purple-500 to-pink-500'
          }
        },
        { 
          name: 'Tailwind CSS', 
          percentage: 92,
          color: {
            light: 'from-teal-500 to-cyan-500',
            dark: 'from-teal-400 to-cyan-400',
            gradient: 'bg-gradient-to-r from-teal-500 to-cyan-500'
          }
        },
        { 
          name: 'Vue.js', 
          percentage: 75,
          color: {
            light: 'from-green-500 to-emerald-500',
            dark: 'from-green-400 to-emerald-400',
            gradient: 'bg-gradient-to-r from-green-500 to-emerald-500'
          }
        },
        { 
          name: 'GSAP', 
          percentage: 80,
          color: {
            light: 'from-lime-500 to-green-500',
            dark: 'from-lime-400 to-green-400',
            gradient: 'bg-gradient-to-r from-lime-500 to-green-500'
          }
        },
      ] as Skill[],
    },
    {
      title: 'Backend',
      skills: [
        { 
          name: 'Node.js', 
          percentage: 88,
          color: {
            light: 'from-green-500 to-teal-500',
            dark: 'from-green-400 to-teal-400',
            gradient: 'bg-gradient-to-r from-green-500 to-teal-500'
          }
        },
        { 
          name: 'Express', 
          percentage: 85,
          color: {
            light: 'from-gray-600 to-gray-700',
            dark: 'from-gray-400 to-gray-500',
            gradient: 'bg-gradient-to-r from-gray-600 to-gray-700'
          }
        },
        { 
          name: 'PostgreSQL', 
          percentage: 82,
          color: {
            light: 'from-blue-600 to-indigo-600',
            dark: 'from-blue-400 to-indigo-400',
            gradient: 'bg-gradient-to-r from-blue-600 to-indigo-600'
          }
        },
        { 
          name: 'MongoDB', 
          percentage: 78,
          color: {
            light: 'from-green-600 to-emerald-600',
            dark: 'from-green-400 to-emerald-400',
            gradient: 'bg-gradient-to-r from-green-600 to-emerald-600'
          }
        },
        { 
          name: 'GraphQL', 
          percentage: 75,
          color: {
            light: 'from-pink-500 to-rose-500',
            dark: 'from-pink-400 to-rose-400',
            gradient: 'bg-gradient-to-r from-pink-500 to-rose-500'
          }
        },
        { 
          name: 'Redis', 
          percentage: 70,
          color: {
            light: 'from-red-500 to-orange-500',
            dark: 'from-red-400 to-orange-400',
            gradient: 'bg-gradient-to-r from-red-500 to-orange-500'
          }
        },
      ] as Skill[],
    },
    {
      title: 'Tools & Others',
      skills: [
        { 
          name: 'Git', 
          percentage: 90,
          color: {
            light: 'from-orange-500 to-red-500',
            dark: 'from-orange-400 to-red-400',
            gradient: 'bg-gradient-to-r from-orange-500 to-red-500'
          }
        },
        { 
          name: 'Docker', 
          percentage: 80,
          color: {
            light: 'from-blue-500 to-cyan-500',
            dark: 'from-blue-400 to-cyan-400',
            gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500'
          }
        },
        { 
          name: 'AWS', 
          percentage: 75,
          color: {
            light: 'from-yellow-500 to-orange-500',
            dark: 'from-yellow-400 to-orange-400',
            gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500'
          }
        },
        { 
          name: 'Figma', 
          percentage: 85,
          color: {
            light: 'from-purple-500 to-violet-500',
            dark: 'from-purple-400 to-violet-400',
            gradient: 'bg-gradient-to-r from-purple-500 to-violet-500'
          }
        },
        { 
          name: 'CI/CD', 
          percentage: 78,
          color: {
            light: 'from-indigo-500 to-blue-500',
            dark: 'from-indigo-400 to-blue-400',
            gradient: 'bg-gradient-to-r from-indigo-500 to-blue-500'
          }
        },
        { 
          name: 'Testing', 
          percentage: 82,
          color: {
            light: 'from-rose-500 to-pink-500',
            dark: 'from-rose-400 to-pink-400',
            gradient: 'bg-gradient-to-r from-rose-500 to-pink-500'
          }
        },
      ] as Skill[],
    },
  ];

  return (
    <section
      id="skills"
      className={`min-h-screen py-20 px-6 transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900'
          : 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-5xl md:text-6xl font-bold text-center mb-16 ${
            isDark
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'
          }`}
        >
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30'
                  : 'bg-white shadow-xl border border-cyan-100'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    {/* Skill name and percentage */}
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`font-medium text-sm ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`font-bold text-sm ${
                          isDark ? 'text-cyan-400' : 'text-cyan-600'
                        }`}
                      >
                        {skill.percentage}%
                      </span>
                    </div>
                    
                    {/* Progress bar background */}
                    <div
                      className={`h-2.5 rounded-full overflow-hidden ${
                        isDark ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      {/* Progress bar fill with animation */}
                      <div
                        className={`h-full ${skill.color.gradient} transition-all duration-1000 ease-out group-hover:scale-105 origin-left shadow-lg`}
                        style={{
                          width: `${skill.percentage}%`,
                          animation: 'slideIn 1s ease-out',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
