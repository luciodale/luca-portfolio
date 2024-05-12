/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#00A1F2",
        secondary: "#EDFBFF",
        accent: "#EEE8A9",
        dark: "#1a5f7d",
      },
    },
  },
  plugins: [],
};
