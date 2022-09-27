const tailwindcss = require('tailwindcss')
const { join } = require('path')

const config = {
  plugins: [
    // Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(join(__dirname, 'tailwind.config.cjs'))
  ]
}

module.exports = config
