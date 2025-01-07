/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e1e5f2  ",
        secondary: "#1f7a8c",
        third: "#022b3a",
        bg: "#bfdbf7",
      },
      animation: {
        perfume: "perfume 2s ease-in-out",
        "zoom-in": "zoom-in 0.5s ease-in-out forwards",
        "slide-up": "slide-up 0.5s ease-in-out forwards",
      },

        fontFamily: {
        lato: ['Lato', 'sans-serif'], // Custom font class for 'Lato'
        Dancing: ['Dancing Script', 'cursive'], // Custom font class for 'Dancing Script'
      },
    },
  },
  plugins: [],
};
