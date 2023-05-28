/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        customColor: '#e9dac1',
        navColor: '#9ed2c6'

      }
    },
  },
  plugins: [],
}