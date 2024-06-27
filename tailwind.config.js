/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
      },
      colors: {
        primary: "#4541FE",
        secondary: "#101722",
        white: "#FFFFFF",
        "dark-text": "#BCBFC3",
        "light-text": "#79818B",
        "light-heading": "#253241",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          xs: "100%", // Custom max-width for xs screen
          sm: "100%", // Custom max-width for sm screen
          md: "768px", // Custom max-width for md screen
          lg: "1025px", // Custom max-width for lg screen
          xl: "1280px", // Custom max-width for xl screen
          "2xl": "1536px", // Custom max-width for 2xl screen
        },
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(50% 50% at 50% 50%, #213B63 0%, #101722 100%)",
        "primary-gradient":
          "linear-gradient(156deg, #0F1329 14.48%, #00050D 83.55%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
