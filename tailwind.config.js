const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      Mercury: "#419ebb",
      Jupiter: "#6d2ed5",
      Mars: "#d14c32",
      Neptune: "#2d68f0",
      Saturn: "#cd5120",
      Uranus: "#1ec1a2",
      Venus: "#eda249",
      BodyBg: "#070724",
      "Inactive-Header-Button-bg": " #ffffff33",
      /* , Header-bg */
      "Inactive-Hover-Button-bg": "#d8d8d833",
      /* hover */
    },

    // fontFamily: {

    // }
    extend: {
      backgroundImage: {
        star: 'url("./assets/background-stars.svg")',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
