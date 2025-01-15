const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  darkMode: 'selector',
  content: ['./src/index.html', './src/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}

export default config
