const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        lime : colors.lime,
        amber : colors.amber,
        rose : colors.rose
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}