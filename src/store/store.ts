import { create } from 'zustand'
import { AppStore } from './slice'
import {
  createNotificationsSlice,
  createAuthUserSlice,
  createPanelsShownSlice,
  createSectionActiveSlice,
  createActiveViewsSlice,
} from './slices'

export const useAppStore = create<AppStore>()((...params) => ({
  ...createNotificationsSlice(...params),
  ...createAuthUserSlice(...params),
  ...createPanelsShownSlice(...params),
  ...createSectionActiveSlice(...params),
  ...createActiveViewsSlice(...params),
}))
