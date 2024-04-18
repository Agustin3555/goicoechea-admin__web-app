import { Slice } from '../slice'

export interface PanelsShownSlice {
  showAdvancedPanel: boolean
  showNav: boolean

  showAdvancedPanel_toggle: () => void
  showNav_toggle: () => void
}

export const createPanelsShownSlice: Slice<PanelsShownSlice> = set => ({
  showAdvancedPanel: false,
  showNav: false,

  showAdvancedPanel_toggle: () =>
    set(get => ({ showAdvancedPanel: !get.showAdvancedPanel })),

  showNav_toggle: () => set(get => ({ showNav: !get.showNav })),
})
