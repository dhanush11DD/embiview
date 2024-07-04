/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// image flip start
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
// image flip end

const addVariablesForColors = plugin(function ({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
});

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
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
        "light-text": "#6F7481",
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
          sm: "540px", // Custom max-width for sm screen
          md: "720px", // Custom max-width for md screen
          lg: "960px", // Custom max-width for lg screen
          xl: "1140px", // Custom max-width for xl screen
          "2xl": "1320px", // Custom max-width for 2xl screen
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
        "glass-gradient":
          "linear-gradient(93deg, rgba(255, 255, 255, 0.08) 6.01%, rgba(255, 255, 255, 0.17) 90.83%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), Myclass, addVariablesForColors],
};
