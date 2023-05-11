/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- Add this line
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'my_bg_image': "url('../../public/image.jpeg')",
      },
    },
  },
  plugins: ["@tailwindcss/forms", require("tw-elements/dist/plugin.cjs")],
}
