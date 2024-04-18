import './App.css'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './routes'
import { AuthGuard } from './guards'
import { Background, RoutesWithNotFound, Snackbar } from './components'
import { Admin, Login } from './pages'

const App = () => {
  return (
    <>
      <Background />
      <div className="main-container">
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
              <Route path={PrivateRoutes.ADMIN} element={<Admin />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </div>
      <Snackbar />
    </>
  )
}

export default App
