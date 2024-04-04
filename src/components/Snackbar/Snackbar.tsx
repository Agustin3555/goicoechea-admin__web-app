import './Snackbar.css'
import { AnimateState, Icon } from '..'
import { useEffect } from 'react'
import { NotifType, useAppStore } from '@/store'
import { COLOR } from '@/styles'

const styleByType: Record<
  NotifType,
  {
    iconName: string
    backgroundColor: string
  }
> = {
  [NotifType.INFO]: {
    iconName: 'fa-solid fa-info',
    backgroundColor: COLOR.d,
  },
  [NotifType.WARNING]: {
    iconName: 'fa-solid fa-triangle-exclamation',
    backgroundColor: COLOR.b,
  },
  [NotifType.ERROR]: {
    iconName: 'fa-solid fa-exclamation',
    backgroundColor: COLOR.a,
  },
  [NotifType.SUCCESS]: {
    iconName: 'fa-solid fa-check',
    backgroundColor: COLOR.c,
  },
}

const Snackbar = () => {
  const currentNotif = useAppStore(state => state.notifs[0])
  const notifs_dequeue = useAppStore(state => state.notifs_dequeue)

  const currentMessageStyle = styleByType[currentNotif?.info.type]

  useEffect(() => {
    if (currentNotif) {
      const dequeuer = setTimeout(
        () => notifs_dequeue(),
        currentNotif.screenTime
      )

      return () => clearTimeout(dequeuer)
    }
  }, [currentNotif])

  return (
    <div className="snackbar">
      <AnimateState state={currentNotif ? currentNotif.id : 'blank'}>
        <div className="animation-container">
          {currentNotif && (
            <div
              className="message"
              style={{ backgroundColor: currentMessageStyle?.backgroundColor }}
            >
              <Icon faIcon={currentMessageStyle?.iconName} />
              <p className="text">{currentNotif.info.text}</p>
            </div>
          )}
        </div>
      </AnimateState>
    </div>
  )
}

export default Snackbar
