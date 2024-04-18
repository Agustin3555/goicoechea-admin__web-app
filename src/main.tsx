import './styles/normalize.css'
import './styles/palette.css'
import './styles/vars.css'
import './styles/style.css'

import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { PrivateInterceptor, PublicInterceptor } from './interceptors'
import App from './App'

PublicInterceptor()
PrivateInterceptor()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
