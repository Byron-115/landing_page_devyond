/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      fontFamily: {
       oxanium: ['Oxanium', 'sans-serif'],
       sans: ['ui-sans-serif', 'system-ui'],
    },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [],
}

