import './Admin.css'
import { useState } from 'react'
import { Nav } from './components'

const Admin = () => {
  const [disabled, setDisabled] = useState(false)

  const handleDeepTouchClick = () => {}

  return (
    <div className="admin">
      {/* <button
        className="deep-touch"
        disabled={disabled}
        onClick={handleDeepTouchClick}
      /> */}
      <Nav />
    </div>
  )
}

export default Admin
