import { UserAdapter } from '@/adapters'
import { UserModel } from '@/models'
import { AppError, privateInstance } from '@/helpers'

const collection = '/users'

// TODO: pasar a auths
export const me = async () => {
  const response = await privateInstance.get(`${collection}/me`)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = UserAdapter.me.output(response.data)
  return adaptedResponse
}

export const getAll = async () => {
  const response = await privateInstance.get(collection)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = UserAdapter.getAll.output(response.data)
  return adaptedResponse
}

export const getOne = async (params: { id: number }) => {
  const { id } = params

  const response = await privateInstance.get(`${collection}/${id}`)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = UserAdapter.getOne.output(response.data)
  return adaptedResponse
}

export const create = async (data: UserModel.CreateData) => {
  const adaptedInput = UserAdapter.create.input(data)

  const response = await privateInstance.post(collection, adaptedInput)
  if (!response || response instanceof AppError) return response as AppError

  return true
}

export const update = async (
  data: UserModel.UpdateData,
  params: { id: number }
) => {
  const { id } = params
  const adaptedInput = UserAdapter.update.input(data)

  const response = await privateInstance.put(
    `${collection}/${id}`,
    adaptedInput
  )
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = UserAdapter.update.output(response.data)
  return adaptedResponse
}

export const remove = async (params: { id: number }) => {
  const { id } = params

  const response = await privateInstance.delete(`${collection}/${id}`)
  if (!response || response instanceof AppError) return response as AppError

  return true
}
