import { app, Menu, Tray } from 'electron'
import { restoreOrCreateWindow } from '/@/mainWindow'

let tray = null
export function createTray() {
    if (tray != null) {
        return
    }

    tray = new Tray(`${__dirname}/../assets/kurousagi.png`)

    const contextMenu = Menu.buildFromTemplate([
        { 
            label: 'Show Overlays',
            type: 'checkbox' 
        },
        { 
            label: 'Preferences',
            click: restoreOrCreateWindow
        },
        { type: "separator" },
        { 
            label: 'About'
        },
        { 
            label: 'Exit',
            click: () => app.quit()
        }
    ])

    tray.addListener("click", restoreOrCreateWindow)

    tray.setToolTip('Rabbit HUD')
    tray.setContextMenu(contextMenu)
}