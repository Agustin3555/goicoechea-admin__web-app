import { StateCreator } from 'zustand'
import { AuthUserSlice, NotificationsSlice } from './slices'

export type AppStore = AuthUserSlice & NotificationsSlice

export type Slice<T> = StateCreator<AppStore, [], [], T>
