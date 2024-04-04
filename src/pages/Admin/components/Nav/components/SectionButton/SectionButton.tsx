import './SectionButton.css'
import { Icon } from '@/components'
import { useAppStore } from '@/store'
import { SECTIONS, SECTION_KEYS } from '@/pages/Admin/helpers'
import { classList } from '@/helpers'

const SectionButton = ({ sectionKey }: { sectionKey: SECTION_KEYS }) => {
  const active = useAppStore(state => state.sectionActive === sectionKey)
  const sectionActive_set = useAppStore(state => state.sectionActive_set)

  const handleChange = () => sectionActive_set(sectionKey)

  return (
    <label
      className={classList('section-button', {
        'section-button--active': active,
      })}
      title={SECTIONS[sectionKey].title}
    >
      <Icon faIcon={SECTIONS[sectionKey].iconName} />
      <input
        name="section"
        type="radio"
        checked={active}
        onChange={handleChange}
      />
    </label>
  )
}

export default SectionButton
