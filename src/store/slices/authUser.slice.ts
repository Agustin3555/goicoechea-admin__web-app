import { UserModel } from '@/models'
import { Slice } from '../slice'

const DEFAULT_STATE: UserModel.FullData | undefined = undefined

export interface AuthUserSlice {
  authUser: UserModel.FullData | undefined

  authUser_set: (value: UserModel.FullData) => void
  authUser_reset: () => void
}

export const createAuthUserSlice: Slice<AuthUserSlice> = set => ({
  authUser: undefined,

  authUser_set: value => set(() => ({ authUser: value })),
  authUser_reset: () => set(() => ({ authUser: DEFAULT_STATE })),
})
