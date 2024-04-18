import { StateCreator } from 'zustand'
import {
  ActiveViewsSlice,
  AuthUserSlice,
  NotificationsSlice,
  PanelsShownSlice,
  SectionActiveSlice,
} from './slices'

export type AppStore = AuthUserSlice &
  NotificationsSlice &
  PanelsShownSlice &
  SectionActiveSlice &
  ActiveViewsSlice

export type Slice<T> = StateCreator<AppStore, [], [], T>
