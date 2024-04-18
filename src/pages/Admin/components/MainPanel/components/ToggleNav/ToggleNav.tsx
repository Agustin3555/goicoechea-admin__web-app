import { TogglePanel } from '..'
import { useAppStore } from '@/store'

const ToggleNav = () => {
  const showNav_toggle = useAppStore(store => store.showNav_toggle)

  const handleClick = () => showNav_toggle()

  return (
    <TogglePanel
      title="Abrir navegación"
      text="Navegación"
      faIcon="fa-solid fa-ellipsis-vertical"
      handleClick={handleClick}
    />
  )
}

export default ToggleNav
