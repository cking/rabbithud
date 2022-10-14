import { writable } from 'svelte/store'

export const config = writable({}, set => {
  window.rabbit.readConfig().then(config => set(config))
  return () => {}
})
