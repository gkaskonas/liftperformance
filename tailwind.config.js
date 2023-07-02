/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- Add this line
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: ["@tailwindcss/forms", require("@tailwindcss/typography"), require("tw-elements/dist/plugin.cjs")],
}
