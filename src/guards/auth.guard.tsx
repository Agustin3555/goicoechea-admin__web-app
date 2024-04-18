import './auth.guard.css'
import { useEffect, useState } from 'react'
import { Spinner } from '@/components'
import { useAppStore } from '@/store'
import { AuthService, tokenEntity } from '@/services'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '@/routes'
import { AppError, sleep } from '@/helpers'

// TODO: transiciones y comentar
const AuthGuard = () => {
  const [ready, setReady] = useState(false)
  const [allow, setAllow] = useState(false)

  const authUser_set = useAppStore(store => store.authUser_set)

  useEffect(() => {
    const asyncEffect = async () => {
      await sleep(1000)

      const tokenExists = tokenEntity.get()

      if (tokenExists) {
        const meResponse = await AuthService.me()

        if (meResponse && !(meResponse instanceof AppError)) {
          authUser_set(meResponse)
          setAllow(true)
        }
      }

      setReady(true)
    }

    asyncEffect()
  }, [])

  return ready ? (
    allow ? (
      <Outlet />
    ) : (
      <Navigate replace to={PublicRoutes.LOGIN} />
    )
  ) : (
    <div className="auth-guard glass">
      <Spinner style={{ size: 'm', color: 'b' }} />
      <p>Verificando...</p>
    </div>
  )
}

export default AuthGuard
