import { app, BrowserWindow } from 'electron'
import { join } from 'path'
import { URL } from 'url'

let windowId = -1

async function createWindow() {
    const browserWindow = new BrowserWindow({
        minWidth: 800,
        minHeight: 500,
        width: 800,
        height: 500,
        maxWidth: 800,
        maxHeight: 500,
        resizable: false, // true for overlay with frame
        alwaysOnTop: false, // true for overlay
        fullscreenable: false,
        icon: `${__dirname}/../assets/kurousagi.png`,
        show: false,
        frame: true, // false for overlay by default
        backgroundColor: "#000000", // "#00000000" for transparent
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
            spellcheck: false,
        }
    })

    /**
     * If the 'show' property of the BrowserWindow's constructor is omitted from the initialization options,
     * it then defaults to 'true'. This can cause flickering as the window loads the html content,
     * and it also has show problematic behaviour with the closing of the window.
     * Use `show: false` and listen to the  `ready-to-show` event to show the window.
     *
     * @see https://github.com/electron/electron/issues/25012 for the afford mentioned issue.
     */
    browserWindow.removeMenu();
    browserWindow.on('ready-to-show', () => {
        browserWindow?.show()

        if (import.meta.env.DEV) {
            browserWindow?.webContents.openDevTools()
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

    windowId = browserWindow.id;
    return browserWindow
}

/**
 * Restore an existing BrowserWindow or Create a new BrowserWindow.
 */
export async function restoreOrCreateWindow() {
    let window = BrowserWindow.fromId(windowId)

    if (window == null) {
        window = await createWindow()
    }

    if (window.isMinimized()) {
        window.restore()
    }

    window.focus()
}
