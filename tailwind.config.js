/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greenCeladon: "#008475",
        orangePortland: "#F46036",
        silverRoman: "#82828B",
        greenLight: "#C5D86D",
        whiteHovering: "#EEEEEE",
        footerColors: "#F0F0F5",
        bgButtonOrange: "#F460361A",
      },
      fontFamily: {
        montserrat: ["Montserrat", "seans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  // screens: {
  //   xs: "480px",
  //   ss: "620px",
  //   sm: "768px",
  //   md: "1060px",
  //   lg: "1200px",
  //   xl: "1700px",
  // },
  plugins: [],
};
