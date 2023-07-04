/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- Add this line
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: ["@tailwindcss/forms", require("@tailwindcss/typography"), require("tw-elements/dist/plugin.cjs"), require("daisyui")],
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
