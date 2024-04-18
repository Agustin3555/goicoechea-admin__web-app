import './TogglePanel.css'
import { Icon } from '@/components'

const TogglePanel = ({
  title,
  text,
  faIcon,
  invert = false,
  handleClick,
}: {
  title: string
  text: string
  faIcon: string
  invert?: boolean
  handleClick: () => void
}) => (
  <button className="toggle-panel glass" title={title} onClick={handleClick}>
    {invert ? (
      <>
        <p>{text}</p>
        <Icon faIcon={faIcon} />
      </>
    ) : (
      <>
        <Icon faIcon={faIcon} />
        <p>{text}</p>
      </>
    )}
  </button>
)

export default TogglePanel
