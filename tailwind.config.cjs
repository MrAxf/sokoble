/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#512DA8',
          main: '#673AB7',
          light: '#D1C4E9'
        },
        box: {
          primary: '#5D4037',
          secondary: '#795548',
          success: {
            primary: '#00796B',
            secondary: '#009688'
          }
        },
        secondary: {
          dark: '#303F9F',
          main: '#3F51B5',
          light: '#C5CAE9'
        },
        player: '#F57C00'
      }
    }
  },
  plugins: []
}
