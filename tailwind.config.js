/** @type {import('tailwindcss').Config} */
const {fontFamily} = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1170px",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.serif],
        josefin: ["var(--font-josefin)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
