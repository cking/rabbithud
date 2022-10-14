import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { URL } from 'url'

let windowId = -1

let quitting = false
app.on('before-quit', () => {
  quitting = true
})

ipcMain.on('toggle-devtools', (event) => {
  const wc = event.sender

  if (import.meta.env.DEV) {
    wc.toggleDevTools()
  }
})

async function doCreateWindow () {
  const browserWindow = new BrowserWindow({
    minWidth: 1280,
    minHeight: 550,
    width: 1080,
    height: 550,
    maxWidth: 1280,
    maxHeight: 550,
    resizable: false, // true for overlay with frame
    alwaysOnTop: false, // true for overlay
    fullscreenable: false,
    icon: join(app.getAppPath(), 'packages', 'main', 'assets', 'kurousagi.png'),
    show: false,
    frame: true, // false for overlay by default
    backgroundColor: '#ffffff', // "#ffffff00" for transparent
    hasShadow: false,
    darkTheme: true,
    transparent: false, // true for overlay

    webPreferences: {
      devTools: true,
      nodeIntegration: false,
      preload: join(app.getAppPath(), 'packages/preload/dist/index.cjs'),
      sandbox: false,
      webSecurity: true,
      allowRunningInsecureContent: true, // allow http websockerts
      contextIsolation: true,
      webviewTag: false,
      spellcheck: false
    }
  })

  browserWindow.removeMenu()
  browserWindow.on('close', ev => {
    if (!quitting) {
      ev.preventDefault()
      browserWindow.hide()
    }
  })

  /**
     * URL for main window.
     * Vite dev server for development.
     * `file://../renderer/index.html` for production and test.
     */
  const pageUrl =
        import.meta.env.DEV && import.meta.env.VITE_DEV_SERVER_URL !== undefined
          ? import.meta.env.VITE_DEV_SERVER_URL
          : new URL('../renderer/dist/index.html', 'file://' + __dirname).toString()

  await browserWindow.loadURL(pageUrl)

  windowId = browserWindow.id
  return browserWindow
}

/**
 * Restore an existing BrowserWindow or Create a new BrowserWindow.
 */
export async function restoreOrCreateWindow () {
  let window = BrowserWindow.fromId(windowId)

  if (window == null) {
    window = await doCreateWindow()
  }

  if (!window.isVisible()) {
    window.show()
  }

  if (window.isMinimized()) {
    window.restore()
  }

  window.focus()
}

export async function createWindow () {
  let window = BrowserWindow.fromId(windowId)

  if (window == null) {
    window = await doCreateWindow()
  }
}

export async function toggleWindow () {
  let window = BrowserWindow.fromId(windowId)

  if (window == null) {
    window = await doCreateWindow()
  }

  if (!window.isVisible()) {
    window.show()
  } else {
    window.hide()
  }
}
