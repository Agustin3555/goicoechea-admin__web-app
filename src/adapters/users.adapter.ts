import { UserModel } from '@/models'
import { InputAdapter, OutputAdapter } from '@/helpers'

export const getAll: {
  output: OutputAdapter<any[], UserModel.MinData[]>
} = {
  output: response => {
    const convertedResource: UserModel.MinData[] = response.map(item => ({
      id: item.id,
      name: item.name,
    }))

    return convertedResource
  },
}

export const getOne: {
  output: OutputAdapter<any, UserModel.RemainingData>
} = {
  output: response => {
    const convertedResource: UserModel.RemainingData = {
      lastName: response.lastName,
      email: response.email,
      role: response.role,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    }

    return convertedResource
  },
}

export const create: {
  input: InputAdapter<UserModel.CreateData, UserModel.CreateBody>
} = {
  input: data => {
    const convertedResource: UserModel.CreateBody = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
    }

    return convertedResource
  },
}

export const update: {
  input: InputAdapter<UserModel.UpdateData, UserModel.UpdateBody>
  output: OutputAdapter<any, UserModel.UpdateResponse>
} = {
  input: data => {
    const convertedResource: UserModel.UpdateBody = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
    }

    return convertedResource
  },
  output: response => {
    const convertedResource: UserModel.UpdateResponse = {
      name: response.name,
      lastName: response.lastName,
      email: response.email,
      role: response.role,
      updatedAt: response.updatedAt,
    }

    return convertedResource
  },
}
