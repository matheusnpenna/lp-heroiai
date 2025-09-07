/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    colors: {
      dark: {
        DEFAULT: '#343434',
        400: '#4A4A4A',
        300: '#505050',
        200: '#4C4C4C',
        100: '#000000',
      },
      primary: {
        DEFAULT: '#692D86',
        400: '#391A48',
        300: '#C888E7',
        100: 'F7F1FA',
        text: '#9747FF'
      },
      light: {
        DEFAULT: '#FFFFFF',
        100: '#F5F5F5'
      }
    }
  },
}