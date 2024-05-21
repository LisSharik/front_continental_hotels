/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");


export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        CBlack: "#070707",
        CGray: "#E4E4E4",
        CWhite: "#F2F2F2",
        CGold: "#FFC700",
      },
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
        Lato: ["Lato", "sans-serif"],
      },

      fontSize: {
          big: "42px",
          base: "14px",
          baseSecundary: "16px",
          subtitulos: "24px",
      },

      
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
