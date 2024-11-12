/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'mainGray': '#5B5B5B',
        'gradientRed': '#FF0004',
        'gradientBlue': '#2F00FF'
      }
    }
  },
  plugins: [],
}

