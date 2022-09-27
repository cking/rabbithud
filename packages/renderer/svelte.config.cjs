const sveltePreprocess = require('svelte-preprocess')
const { join } = require('path')

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: {
      configFilePath: join(__dirname, 'postcss.config.cjs')
    }
  })
}
