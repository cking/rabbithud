import App from './App.svelte'
import { config } from './stores'

// subscribe to write back changes
// nice to have side effect: automatically fetches config for ya
const unsubscribe = config.subscribe(config => window.rabbit.updateConfig(config))

const app = new App({
  target: document.body
})

document.addEventListener('unload', unsubscribe)
export default app
