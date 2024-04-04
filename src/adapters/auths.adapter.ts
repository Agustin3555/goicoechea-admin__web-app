import { AuthModel, UserModel } from '@/models'
import { InputAdapter, OutputAdapter } from '@/helpers'

export const login: {
  input: InputAdapter<AuthModel.LoginData, AuthModel.LoginBody>
  output: OutputAdapter<any, AuthModel.LoginResponse>
} = {
  input: data => {
    const convertedResource: AuthModel.LoginBody = {
      email: data.email,
      password: data.password,
    }

    return convertedResource
  },
  output: response => {
    const convertedResource: AuthModel.LoginResponse = {
      token: response.token,
    }

    return convertedResource
  },
}

export const me: {
  output: OutputAdapter<any, UserModel.FullData>
} = {
  output: response => {
    const convertedResource: UserModel.FullData = {
      id: response.id,
      name: response.name,
      lastName: response.lastName,
      email: response.email,
      role: response.role,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    }

    return convertedResource
  },
}
