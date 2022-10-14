import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('rabbit', {
  devtools: () => ipcRenderer.send('toggle-devtools'),
  updateConfig: (config) => ipcRenderer.send('update-config', config),
  readConfig: () => ipcRenderer.invoke('toggle-devtools')
})
