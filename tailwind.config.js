/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    colors: {
      'editor-header': colors.violet[900],
      'editor-toolbar': colors.violet[500],
      'editor-border': colors.indigo[300],
      'logo-color': '#372F4B',
      'section-border': colors.neutral[400],
      'editor-title': colors.white,
      'editor-t-hover': colors.yellow[500],
      'editor-tools': colors.violet[200]
    },
    fontFamily: {
      primary: ['Righteous', 'cursive'],
      secondary: ['Sarala', 'sans-serif']
    },
    extend: {
      borderRadius: {
        'editor-radius': '1rem 1rem 0 0',
        'tab-radius': '.5rem .5rem 0 0'
      }
    }
  },
}
