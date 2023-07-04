/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- Add this line
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: ["@tailwindcss/forms", require("@tailwindcss/typography"), require("tw-elements/dist/plugin.cjs"), require("daisyui")],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "3xl": "1820px",
    },
  },
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        primary: "red",
      }
    },
    ],
    darkTheme: "light",
  }
}
