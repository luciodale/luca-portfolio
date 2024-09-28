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
        primary: "#0074A1", 
        secondary: "#E1F5F9", 
        accent: "#F9F4A7", 
        dark: "#002A3B",
      },
    },
  },
  plugins: [],
};
