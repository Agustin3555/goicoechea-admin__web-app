import { AuthAdapter } from '@/adapters'
import { AuthModel } from '@/models'
import { AppError, privateInstance, publicInstance } from '@/helpers'

const collection = '/auth'

export const login = async (data: AuthModel.LoginData) => {
  const adaptedInput = AuthAdapter.login.input(data)

  const response = await publicInstance.post(
    `${collection}/login`,
    adaptedInput
  )
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = AuthAdapter.login.output(response.data)
  return adaptedResponse
}

export const me = async () => {
  const response = await privateInstance.get(`${collection}/me`)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = AuthAdapter.me.output(response.data)
  return adaptedResponse
}
