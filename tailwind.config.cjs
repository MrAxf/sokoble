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
          dark: '#1976D2',
          main: '#2196F3',
          light: '#BBDEFB'
        },
        player: '#F57C00'
      }
    }
  },
  plugins: []
}
