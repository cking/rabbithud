const { join } = require('path')

const config = {
  content: [
    join(__dirname, 'src/**/*.{html,js,svelte}'),
    join(__dirname, '../../node_modules/flowbite-svelte/**/*.{html,js,svelte}')
  ],

  theme: {
    extend: {}
  },

  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'media'
}

module.exports = config
