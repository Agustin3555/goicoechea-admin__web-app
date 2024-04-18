import { TogglePanel } from '..'
import { useAppStore } from '@/store'

const ToggleAdvancedPanel = () => {
  const showAdvancedPanel_toggle = useAppStore(
    state => state.showAdvancedPanel_toggle
  )

  const handleClick = () => showAdvancedPanel_toggle()

  return (
    <TogglePanel
      title="Abrir panel avanzado"
      text="Avanzado"
      faIcon="fa-solid fa-bolt"
      invert
      handleClick={handleClick}
    />
  )
}

export default ToggleAdvancedPanel
