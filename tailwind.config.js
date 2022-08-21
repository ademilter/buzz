/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "media",
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope VF", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
