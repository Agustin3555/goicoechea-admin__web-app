import './ViewSelector.css'
import { useState, useEffect, useRef } from 'react'
import { Icon, Separator } from '@/components'
import { useAppStore } from '@/store'
import { SECTIONS, SectionKeys } from '@/constants'

const ViewSelector = ({ sectionKey }: { sectionKey: SectionKeys }) => {
  const activeView = useAppStore(store => store.activeViews[sectionKey])
  const activeViews_set = useAppStore(store => store.activeViews_set)

  const selectorRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const { views } = SECTIONS[sectionKey]

  const activeViewInfo = views[activeView]

  const viewsInfo = Object.keys(views).map(key => ({
    viewKey: key,
    ...views[key],
  }))

  useEffect(() => {
    if (selectorRef.current) {
      const activeViewTitle =
        selectorRef.current.querySelector<HTMLElement>('button p')
      const viewTitles = selectorRef.current.querySelectorAll('ul p')

      if (activeViewTitle)
        activeViewTitle.style.width = `${Math.max(
          ...Array.from(viewTitles).map(title => title.clientWidth)
        )}px`
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      )
        setOpen(false)
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleButtonClick = () => setOpen(prevValue => !prevValue)

  const handleItemClick = (viewKey: string) => () =>
    activeViews_set(sectionKey, viewKey)

  return (
    <div className={'view-selector'} data-open={open} ref={selectorRef}>
      <button title="Vistas" onClick={handleButtonClick}>
        <Icon faIcon={activeViewInfo.faIcon} />
        <p>{activeViewInfo.title}</p>
        <Separator style={{ invert: true }} />
        <Icon faIcon="fa-solid fa-chevron-down" handlingClass="arrow" />
      </button>
      <ul>
        {viewsInfo.map(({ title, viewKey, faIcon }) => (
          <li
            key={viewKey}
            title={title}
            data-selected={viewKey === activeView}
            onClick={handleItemClick(viewKey)}
          >
            <Icon faIcon={faIcon} />
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ViewSelector
