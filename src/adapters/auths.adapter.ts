import { AuthModel } from '@/models'
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
      token: response.access_token,
    }

    return convertedResource
  },
}
