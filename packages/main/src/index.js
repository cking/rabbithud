import { app } from 'electron'
import './security'
import { createTray } from './tray'
import { restoreOrCreateWindow } from '@/preferencesWindow'

/**
 * Prevent electron from running multiple instances.
 */
const isSingleInstance = app.requestSingleInstanceLock()
if (!isSingleInstance) {
  app.quit()
  process.exit(0)
}
app.on('second-instance', restoreOrCreateWindow)
app.on('activate', restoreOrCreateWindow)

/**
 * Disable Hardware Acceleration to save more system resources.
 */
app.disableHardwareAcceleration()

/**
 * Create the application window when the background process is ready.
 */
app
  .whenReady()
  .then(createTray)
  .catch(e => console.error('Failed create window:', e))

/**
 * Check for new version of the application - production mode only.
 */
if (import.meta.env.PROD) {
  // TODO ?
  // app
  //     .whenReady()
  //     .then(() => import('electron-updater'))
  //     .then(({ autoUpdater }) => autoUpdater.checkForUpdatesAndNotify())
  //     .catch(e => console.error('Failed check updates:', e))
}
