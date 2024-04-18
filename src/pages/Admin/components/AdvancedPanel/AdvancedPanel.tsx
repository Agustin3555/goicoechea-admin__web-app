import './AdvancedPanel.css'
import { useAppStore } from '@/store'

const AdvancedPanel = () => {
  const showAdvancedPanel = useAppStore(store => store.showAdvancedPanel)

  return (
    <div className="advanced-panel" data-open={showAdvancedPanel}>
      <div className="content"></div>
    </div>
  )
}

export default AdvancedPanel
