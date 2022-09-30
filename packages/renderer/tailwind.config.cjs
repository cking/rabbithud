const { join } = require('path')

const config = {
  content: [
    join(__dirname, 'src/**/*.{html,js,svelte}')
  ],

  theme: {
    extend: {}
  },

  plugins: [],

  darkMode: 'media'
}

module.exports = config
