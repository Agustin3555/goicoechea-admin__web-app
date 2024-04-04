import { Slice } from '../slice'

const DEFAULT_STATE: TankData = { sensorDistance: 0, flowRate: 0 }

export interface AuthUserSlice {
  authUser: TankData

  authUser_set: (value: TankData) => void
  authUser_reset: () => void
}

export const createAuthUserSlice: Slice<AuthUserSlice> = set => ({
  authUser: DEFAULT_STATE,

  authUser_set: value => set(() => ({ authUser: value })),
  authUser_reset: () => set(() => ({ authUser: {} })),
})
