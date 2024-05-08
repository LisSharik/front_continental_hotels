/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        CBlack: "#070707",
        CGray: "#E4E4E4",
        CWhite: "#F2F2F2",
        CGold: "#D89B00",
      },
      fontFamily: {
        Bodoni: ["Bodoni Moda", "serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
