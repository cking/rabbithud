export class OverlayURL {
  // TODO: provide a way to generate url from JSON instead directly providing this sht
  constructor (path, modern = false, options = '') {
    this.path = path
    this.modern = !!modern
    this.options = '' + options
  }

  compute () {
    // TODO: proxy instead of original
    const url = new URL(this.path)

    // TODO: wss wrapper
    // TODO: get ip and port from global config object
    url.search = (this.modern
      ? '?OVERLAY_WS=ws://' + ipAddress + ':' + port + '/ws'
      : '?HOST_PORT=ws://' + ipAddress + ':' + port) +
      this.options

    return url
  }
}
