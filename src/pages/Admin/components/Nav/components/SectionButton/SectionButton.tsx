import './SectionButton.css'
import { Icon } from '@/components'
import { useAppStore } from '@/store'
import { SECTIONS, SectionKeys } from '@/constants'
import { classList } from '@/helpers'

const SectionButton = ({ sectionKey }: { sectionKey: SectionKeys }) => {
  const active = useAppStore(store => store.sectionActive === sectionKey)
  const sectionActive_set = useAppStore(store => store.sectionActive_set)

  const handleChange = () => sectionActive_set(sectionKey)

  return (
    <label
      className={classList('section-button', 'glass', {
        'section-button--active': active,
      })}
      title={SECTIONS[sectionKey].title}
    >
      <Icon faIcon={SECTIONS[sectionKey].faIcon} />
      <input
        name="section"
        type="radio"
        checked={active}
        hidden
        onChange={handleChange}
      />
    </label>
  )
}

export default SectionButton
