import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './routes'
import { AuthGuard } from './guards'
import { Background, RoutesWithNotFound, Snackbar } from './components'
import { Login } from './pages'

const App = () => {
  return (
    <>
      <Background />
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route
            path="/"
            element={<Navigate replace to={PrivateRoutes.ADMIN} />}
          />

          {/* Public Routes */}
          <Route path={PublicRoutes.LOGIN} element={<Login />} />

          {/* Protected Routes */}
          <Route element={<AuthGuard />}>
            <Route path={PrivateRoutes.ADMIN} element={<p>Admin</p>} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
      <Snackbar />
    </>
  )
}

export default App
