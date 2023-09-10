/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // <-- Add this line
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [
    "@tailwindcss/forms",
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin.cjs"),
    require("daisyui"),
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1820px",
      "4xl": "2000px",
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#BF1E2C",
        },
      },
    ],
    darkTheme: "light",
  },
  extend: {
    animation: {
      fadeIn: "fadeIn 2s ease-in forwards"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      }
    }
  },
  variants: {
    animation: ["motion-safe"]
  }
};
