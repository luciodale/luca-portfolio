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
        primary: "#0074A1", // A strong, harmonious blue
        secondary: "#E1F5F9", // A softer, complementary light blue
        accent: "#F9F4A7", // A gentle, warm yellow for highlights
        dark: "#002A3B",
      },
    },
  },
  plugins: [],
};
