import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('rabbit', {
  devtools: () => ipcRenderer.send('toggle-devtools')
})
