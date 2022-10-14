import { BrowserWindow, ipcMain } from 'electron'
import { watch, writeFileSync, readFileSync } from 'fs'
import { join } from 'path'

const xdgVarName = 'XDG_CONFIG_HOME'
const configFileName = 'rabbithud.json'

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
  const rawJson = readFileSync(join(resolveConfigFile(), configFileName))
  const json = JSON.parse(rawJson)

  return json
}

ipcMain.on('update-config', (_, data) => {
  const json = JSON.stringify(data, null, 2)
  writeFileSync(join(resolveConfigFile(), configFileName), json)
})

ipcMain.handle('get-config', async (_) => readConfig())

export function installFilewatcher () {
  watch(resolveConfigFile(), handleFileChange).unref()
}
