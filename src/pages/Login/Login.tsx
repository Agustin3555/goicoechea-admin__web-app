import './Login.css'
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react'
import {
  Input,
  LoadingButton,
  LoadingButtonState,
  SinglePage,
} from '@/components'
import { AuthService, tokenEntity } from '@/services'
import { NotifType, useAppStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '@/routes'
import { AppError, sleep } from '@/helpers'

const Login = () => {
  const navigate = useNavigate()

  const authUser_set = useAppStore(state => state.authUser_set)
  const authUser_reset = useAppStore(state => state.authUser_reset)
  const notifs_enqueue = useAppStore(state => state.notifs_enqueue)

  const [loadingButtonState, setLoadingButtonState] = useState(
    LoadingButtonState.READY
  )

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    authUser_reset()
  }, [])

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { name, value } = event.target

    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()
    setLoadingButtonState(LoadingButtonState.LOADING)

    await sleep(1500)

    const loginResponse = await AuthService.login(formValues)

    if (!loginResponse || loginResponse instanceof AppError) {
      setLoadingButtonState(LoadingButtonState.ERROR)
    } else {
      tokenEntity.set(loginResponse.token)

      const userResponse = await AuthService.me()

      if (userResponse) {
        authUser_set(userResponse)

        notifs_enqueue({
          type: NotifType.INFO,
          text: 'Logueado con éxito',
        })

        setLoadingButtonState(LoadingButtonState.SUCCESS)

        await sleep(1500)

        // Redirigir al usuario a la página de administración
        navigate(`/${PrivateRoutes.ADMIN}`, { replace: true })
      }
    }

    await sleep(1500)

    setLoadingButtonState(LoadingButtonState.READY)
  }

  return (
    <SinglePage title="Iniciar Sesión">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="fields">
          <Input
            id="email"
            title="Email"
            extraAttrs={{
              type: 'email',
              required: true,
              onChange: handleFieldChange,
            }}
          />
          <Input
            id="password"
            title="Contraseña"
            extraAttrs={{
              type: 'password',
              required: true,
              onChange: handleFieldChange,
            }}
          />
        </div>
        <LoadingButton
          state={loadingButtonState}
          title="Acceder"
          faIcon="fa-solid fa-arrow-right"
        />
      </form>
    </SinglePage>
  )
}

export default Login
