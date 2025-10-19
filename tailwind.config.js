// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0f172a', // slate-900
        'primary': '#e2e8f0',     // slate-200
        'secondary': '#94a3b8',   // slate-400
        'accent': '#5eead4',      // teal-300
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}