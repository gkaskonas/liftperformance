/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // <-- Add this line
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  relative: true,
    transform: (content) => content.replace(/taos:/g, ''),},
  plugins: [
    "@tailwindcss/forms",
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin.cjs"),
    require("daisyui"),
    require('taos/plugin'),
    require("@nextui-org/react")
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
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
      fadeIn: "fadeIn 2s ease-in forwards",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
};
