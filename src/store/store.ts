import { create } from 'zustand'
import { AppStore } from './slice'
import {
  createNotificationsSlice,
  createAuthUserSlice,
  createSectionActiveSlice,
} from './slices'

export const useAppStore = create<AppStore>()((...params) => ({
  ...createNotificationsSlice(...params),
  ...createAuthUserSlice(...params),
  ...createSectionActiveSlice(...params),
}))
