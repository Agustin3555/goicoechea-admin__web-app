import './Switcher.css'
import { useEffect, useRef, ReactElement } from 'react'

const ACTIVE_CLASS = 'active'
const INACTIVE_CLASS = 'inactive'

// TODO optimizar
const Switcher = ({
  activeIndex,
  children,
}: {
  activeIndex: number
  children: ReactElement | ReactElement[]
}) => {
  const containerElementRef = useRef<HTMLDivElement | null>(null)
  const activeElementRef = useRef<HTMLElement | null>(null)

  const initialRenderRef = useRef(true)

  useEffect(() => {
    // Inicialización
    if (initialRenderRef.current) {
      initialRenderRef.current = false

      if (!containerElementRef.current) return

      const children = Array.from(
        containerElementRef.current.children
      ) as HTMLElement[]

      children.forEach((item, index) => {
        if (index === activeIndex) activeElementRef.current = item
        else {
          // item.hidden = true
          item.classList.add(INACTIVE_CLASS)
        }
      })

      return
    }

    if (!containerElementRef.current || !activeElementRef.current) return

    if (!activeElementRef.current.classList.contains(ACTIVE_CLASS)) {
      // activeElementRef.current.hidden = false
      activeElementRef.current.classList.add(ACTIVE_CLASS)
      return
    }

    const handleNewActiveTransitionend = () => {
      activeElementRef.current = newActiveElement

      newActiveElement.removeEventListener(
        'transitionend',
        handleNewActiveTransitionend
      )
    }

    const handleActiveTransitionend = () => {
      if (!activeElementRef.current) return

      // activeElementRef.current.hidden = true

      // newActiveElement.hidden = false
      newActiveElement.classList.replace(INACTIVE_CLASS, ACTIVE_CLASS)

      newActiveElement.addEventListener(
        'transitionend',
        handleNewActiveTransitionend
      )

      activeElementRef.current.removeEventListener(
        'transitionend',
        handleActiveTransitionend
      )
    }

    const newActiveElement = containerElementRef.current.children[
      activeIndex
    ] as HTMLElement

    activeElementRef.current.addEventListener(
      'transitionend',
      handleActiveTransitionend
    )

    activeElementRef.current.classList.replace(ACTIVE_CLASS, INACTIVE_CLASS)
  }, [activeIndex])

  return (
    <div className="switcher" ref={containerElementRef}>
      {children}
    </div>
  )
}

export default Switcher
