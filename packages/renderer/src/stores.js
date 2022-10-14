import { writable } from 'svelte/store'
import { asyncable } from 'svelte-asyncable'

export const config = writable({}, set => {
  window.rabbit.readConfig().then(config => set(config))
  return () => {}
})

let presetCache
export const presets = asyncable(async () => {
  if (presetCache) {
    return presetCache
  }

  const json = fetch('https://cking.github.io/act-overlays/overlays.json').then(res => res.json())
  return json
})
