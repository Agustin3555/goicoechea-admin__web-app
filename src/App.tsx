// import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { Login, NotFound } from './pages'
import { Background, Snackbar } from './components'
// import { AuthGuard } from './guards'
// import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes'

const App = () => {
  return (
    <>
      <Background />
      {/* <BrowserRouter>
        <RoutesWithNotFound>
          <Route
          path="/"
          element={<Navigate replace to={PRIVATE_ROUTES.admin} />}
          />

          Public Routes
          <Route path={PUBLIC_ROUTES.login} element={<Login />} />

          Protected Routes
          <Route element={<AuthGuard />}>
          <Route path={PRIVATE_ROUTES.admin} element={<Admin />} />
          </Route>
          </RoutesWithNotFound>
        </BrowserRouter> */}
      <Login />
      <Snackbar />
    </>
  )
}

export default App
