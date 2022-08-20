const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'IBM Plex Sans',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          'IBM Plex Serif',
          ...defaultTheme.fontFamily.serif,
        ]
      }
    },
  },
  plugins: [],
};