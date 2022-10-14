import { BrowserWindow, ipcMain } from 'electron'
import { watch, writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

const xdgVarName = 'XDG_CONFIG_HOME'
const configFileName = 'rabbithud.json'

function normalizeConfig (json) {
  return Object.assign({
    settings: {
      ip: '127.0.0.1',
      port: 10501,
      enableSecureProxy: false,

      enableCactbot: true,

      showOverlaysOnStartup: false,
      toggleOverlayHotkey: 'Ctrl+Shift+X'
    },
    overlays: []
  }, json)
}

function resolveConfigFile () {
  let path = process.env[xdgVarName]

  if (!path) {
    path = join(process.env.HOME, '.config')
  }

  return path
}

function handleFileChange (_type, filename) {
  if (filename !== configFileName) {
    return
  }

  const json = readConfig()

  BrowserWindow.getAllWindows().forEach(win => {
    win.webContents.send('update-config', json)
  })
}

function readConfig () {
  const f = join(resolveConfigFile(), configFileName)
  if (!existsSync(f)) {
    return normalizeConfig({})
  }

  const rawJson = readFileSync(f)
  const json = JSON.parse(rawJson)

  return normalizeConfig(json)
}

ipcMain.on('update-config', (_, data) => {
  const json = JSON.stringify(data, null, 2)
  writeFileSync(join(resolveConfigFile(), configFileName), json)
})

ipcMain.handle('get-config', async (_) => readConfig())

export function installFilewatcher () {
  watch(resolveConfigFile(), handleFileChange).unref()
}
