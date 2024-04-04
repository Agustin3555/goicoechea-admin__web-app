import { StateCreator } from 'zustand'
import { AuthUserSlice, NotificationsSlice, SectionActiveSlice } from './slices'

export type AppStore = AuthUserSlice & NotificationsSlice & SectionActiveSlice

export type Slice<T> = StateCreator<AppStore, [], [], T>
