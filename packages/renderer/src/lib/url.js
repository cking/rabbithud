import { get } from 'svelte/store'
import { config as configStore, presets as presetStore } from '../stores'

export class OverlayURL {
  static async fromPreset (presetName, enableProxy = false) {
    const presets = await get(presetStore)

    const preset = presets[presetName]

    return new OverlayURL(enableProxy
      ? preset.http_proxy
      : preset.url, preset.modern, preset.options)
  }

  constructor (path, modern = false, options = '') {
    this.path = path
    this.modern = !!modern
    this.options = '' + options
  }

  compute () {
    const url = new URL(this.path)
    const config = get(configStore)

    // TODO: wss wrapper
    url.search = (this.modern
      ? `?OVERLAY_WS=ws://${config.settings.ip}:${config.settings.port}/ws`
      : `?HOST_PORT=ws://${config.settings.ip}:${config.settings.port}`) +
      this.options

    return url
  }
}
