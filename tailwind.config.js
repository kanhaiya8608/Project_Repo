
// // tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable dark mode variant for background colors
      borderColor: ['dark'], // Enable dark mode variant for border colors
      textColor: ['dark'], // Enable dark mode variant for text colors
    },
  },
  plugins: [
    require('tailwindcss-dark-mode')(), // Enable the tailwindcss-dark-mode plugin
  ],
};
