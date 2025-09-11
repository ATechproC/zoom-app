/** @type {import('tailwindcss').Config} */
const tailwindAnimate = require("tailwindcss-animate");

module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          1: '#1C1F2E',
          2: '#161925',
          3: '#252A41',
          4: '#1E2757',
        },
        glass: "rgba(255,255,255,0.1)",
        overlay: "rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        heroBg: "url('../public/images/hero-background.png')",
      },
    },
  },
  plugins: [tailwindAnimate],
};
