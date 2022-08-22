/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "media",
  content: {
    files: ["content/**/*.md", "layouts/**/*.html"],
  },
  safelist: [
    {
      pattern: /grid-cols-(2|3|4|5|6)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope VF", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    // require("@tailwindcss/forms"),
  ],
};
