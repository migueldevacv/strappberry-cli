/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      grey: "#686B75",
      whiteBone: "#F0F1F5",
      blue: "#353C59",
      red: "#D15253",
    },
  },
  plugins: [],
};
