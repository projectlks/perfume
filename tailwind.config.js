/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e1e5f2  ",
        secondary: "#1f7a8c",
        third: "#022b3a",
        bg : '#bfdbf7'
      },
      animation: {
        perfume: "perfume 2s ease-in-out",
        "zoom-in": "zoom-in 0.5s ease-in-out forwards",
      },
      keyframes: {
        perfume: {
          "0%": {
            transform: "translateX(100%) rotate(-20deg)", // Start from the right
            opacity: 0, // Invisible at start
            filter: "drop-shadow(0 0 0px rgba(0, 0, 0, 0.8))",
          },
          "25%": {
            transform: "translateX(-200px) rotate(-20deg)  ", // Move to original position
            opacity: 1, // Fully visible
            filter: "drop-shadow(0 0 0px rgba(0, 0, 0, 0.8))",
          },
          "50%": {
            transform: "translateX(0px) rotate(-20deg)  ", // Move to original position
            opacity: 1, // Fully visible
            filter: "drop-shadow(0 0 0px rgba(0, 0, 0, 0.8))",
          },
          "75%": {
            transform: "translateX(0px) rotate(20deg)", // Stay in position with rotation
            opacity: 1, // Fully visible
            filter: "drop-shadow(0 0 0px rgba(0, 0, 0, 0.8))", // Full shadow
          },
          "100%": {
            transform: "translateX(0px) rotate(20deg)", // Stay in position with rotation
            opacity: 1, // Fully visible
            filter: "drop-shadow(20px 30px 30px rgba(252, 163, 17, 0.5))", // Full shadow
          },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
