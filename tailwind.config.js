/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,md,ttf}',
  ],
  theme: {
    fontFamily: {
        oswald: "Oswald, sans-serif",
        urbanist: "Urbanist, sans-serif",
        Red_Hat_Display: ['var(--font-red-hat-display)'],
        montserrat: ['var(--font-Montserrat)'],
    },
    colors: {
      ...colors,
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        // sm: '2rem',
        lg: '1.5rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
    extend: {},
},
  plugins: [],
}
