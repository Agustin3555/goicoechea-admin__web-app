import { PublicRoutes } from '@/routes'
import { useAppStore } from '@/store'
import { Navigate, Outlet } from 'react-router-dom'

const AuthGuard = () => {
  const authUser = useAppStore(state => state.authUser)

  // TODO: mejorar la verificacion
  return authUser.name ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  )
}

export default AuthGuard
