/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        xsm: "inset 0 1px 0 0 rgb(255 255 255 / 5%)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
