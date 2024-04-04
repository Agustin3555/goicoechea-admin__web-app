import { create } from 'zustand'
import { AppStore } from './slice'
import { createAuthUserSlice, createNotificationsSlice } from './slices'

export const useAppStore = create<AppStore>()((...params) => ({
  ...createAuthUserSlice(...params),
  ...createNotificationsSlice(...params),
}))
