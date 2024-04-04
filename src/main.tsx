import './styles/normalize.css'
import './styles/palette.css'
import './styles/vars.css'
import './styles/style.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PrivateInterceptor, PublicInterceptor } from './interceptors'

PublicInterceptor()
PrivateInterceptor()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
