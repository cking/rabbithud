import { ipcMain } from 'electron'
import { watch, writeFileSync } from 'fs'
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

  // TODO: send update event to electron
  throw new Error()
}

ipcMain.on('update-config', (_, data) => {
  const json = JSON.stringify(data, null, 2)
  writeFileSync(join(resolveConfigFile(), configFileName), json)
})

export function installFilewatcher () {
  watch(resolveConfigFile(), handleFileChange).unref()
}
