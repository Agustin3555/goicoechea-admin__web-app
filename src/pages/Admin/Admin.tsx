import './Admin.css'
import { AdvancedPanel, MainPanel, Nav } from './components'
import { useAppStore } from '@/store'

const Admin = () => {
  const showNav = useAppStore(store => store.showNav)
  const showAdvancedPanel = useAppStore(store => store.showAdvancedPanel)

  const showNav_toggle = useAppStore(store => store.showNav_toggle)
  const showAdvancedPanel_toggle = useAppStore(
    store => store.showAdvancedPanel_toggle
  )

  const handleDeepTouchClick = () => {
    showNav && showNav_toggle()
    showAdvancedPanel && showAdvancedPanel_toggle()
  }

  return (
    <div className="admin">
      <MainPanel />
      <button
        title="Cerrar"
        hidden={!(showNav || showAdvancedPanel)}
        onClick={handleDeepTouchClick}
      />
      <Nav />
      <AdvancedPanel />
    </div>
  )
}

export default Admin
