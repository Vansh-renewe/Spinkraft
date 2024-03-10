// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  presets: [],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: colors.orange,
        secondary: colors.gray,
        positive: colors.emerald,
        negative: colors.red,
        warning: colors.amber,
        info: colors.blue,

        theme: {
          light: colors.emerald["300"],
          DEFAULT: colors.emerald["500"],
          dark: "black",
        },
        theme2: {
          light: colors.orange["400"],
          DEFAULT: colors.orange["500"],
          dark: colors.orange["600"],
        },
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["Bruno Ace", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
      display: ["group-hover"],
    },
  },
  plugins: [forms, require("@tailwindcss/typography")],
};
