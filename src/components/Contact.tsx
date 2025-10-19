import { useThemeStore } from '../store/useThemeStore';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const { isDark } = useThemeStore();

  const contactInfo = [
    { icon: Mail, text: 'waiyanxtet04@gmail.com', href: 'mailto:waiyanxtet04@gmail.com' },
    { icon: Phone, text: '+959755565487', href: 'tel:+959755565487' },
    { icon: MapPin, text: 'Ngathainggyaung, Ayewarwaddy', href: '#' },
  ];

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 px-6 transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900'
          : 'bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-5xl md:text-6xl font-bold text-center mb-16 ${
            isDark
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600'
          }`}
        >
          Get In Touch
        </h2>

        <p
          className={`text-xl text-center mb-12 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          I'd love to hear from you! Whether you have a question or just want to
          say hi, feel free to reach out.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map(({ icon: Icon, text, href }, index) => (
            <a
              key={index}
              href={href}
              className={`flex flex-col items-center p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                isDark
                  ? 'bg-gray-800/50 backdrop-blur-sm border border-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/20'
                  : 'bg-white shadow-xl hover:shadow-2xl border border-pink-100'
              }`}
            >
              <Icon
                className={`w-8 h-8 mb-3 ${
                  isDark ? 'text-pink-400' : 'text-pink-600'
                }`}
              />
              <span
                className={`text-center ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {text}
              </span>
            </a>
          ))}
        </div>

        <div
          className={`p-8 rounded-3xl ${
            isDark
              ? 'bg-gray-800/50 backdrop-blur-sm border border-pink-500/30'
              : 'bg-white shadow-xl border border-pink-100'
          }`}
        >
          <form className="space-y-6">
            <div>
              <label
                className={`block mb-2 font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Name
              </label>
              <input
                type="text"
                className={`w-full px-4 py-3 rounded-xl transition-all ${
                  isDark
                    ? 'bg-gray-900 border border-pink-500/30 text-white focus:border-pink-500'
                    : 'bg-gray-50 border border-gray-200 text-gray-900 focus:border-pink-600'
                } focus:outline-none focus:ring-2 ${
                  isDark ? 'focus:ring-pink-500/50' : 'focus:ring-pink-600/50'
                }`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                className={`block mb-2 font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Email
              </label>
              <input
                type="email"
                className={`w-full px-4 py-3 rounded-xl transition-all ${
                  isDark
                    ? 'bg-gray-900 border border-pink-500/30 text-white focus:border-pink-500'
                    : 'bg-gray-50 border border-gray-200 text-gray-900 focus:border-pink-600'
                } focus:outline-none focus:ring-2 ${
                  isDark ? 'focus:ring-pink-500/50' : 'focus:ring-pink-600/50'
                }`}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                className={`block mb-2 font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Message
              </label>
              <textarea
                rows={5}
                className={`w-full px-4 py-3 rounded-xl transition-all ${
                  isDark
                    ? 'bg-gray-900 border border-pink-500/30 text-white focus:border-pink-500'
                    : 'bg-gray-50 border border-gray-200 text-gray-900 focus:border-pink-600'
                } focus:outline-none focus:ring-2 ${
                  isDark ? 'focus:ring-pink-500/50' : 'focus:ring-pink-600/50'
                }`}
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className={`w-full py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70'
                  : 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer
        className={`mt-20 pt-8 border-t text-center ${
          isDark ? 'border-pink-500/30 text-gray-400' : 'border-pink-200 text-gray-600'
        }`}
      >
        <p>© 2025 Jane Doe. Built with React & Tailwind CSS.</p>
      </footer>
    </section>
  );
};
