import StartView from './views/Start.svelte'
import GeneralConfigView from './views/GeneralConfig.svelte'
import CactbotView from './views/Cactbot.svelte'
import OverlayView from './views/Overlay.svelte'

export const routes = {
  '/': StartView,
  '/settings/general': GeneralConfigView,
  '/settings/cactbot': CactbotView,

  '/overlay/:type/:id': OverlayView
}
