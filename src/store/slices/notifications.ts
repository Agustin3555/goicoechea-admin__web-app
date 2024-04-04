import { Slice } from '../slice'

export enum NotifType {
  INFO,
  WARNING,
  ERROR,
  SUCCESS,
}

interface NotifInfo {
  text?: string
  type: NotifType
}

interface Notif {
  id: string
  info: NotifInfo
  screenTime: number
}

// Valor entre 200 a 400
const WORDS_PER_MINUTE = 250
// Valor entre 1 a 10
const READING_DIFFICULTY = 4

const readingTimeInMs = (text: string) => {
  if (text === '') return 1000

  const words = text.split(/\s+/).length

  const readingTimeInMinutes = words / WORDS_PER_MINUTE

  return Math.round(readingTimeInMinutes * 60 * 1000 * READING_DIFFICULTY)
}

export interface NotificationsSlice {
  notifs: Notif[]

  notifs_enqueue: (info: NotifInfo) => void
  notifs_dequeue: () => void
  notifs_reset: () => void
}

const DEFAULT_STATE: Notif[] = []

export const createNotificationsSlice: Slice<NotificationsSlice> = (
  set,
  get
) => ({
  notifs: DEFAULT_STATE,

  notifs_enqueue: info => {
    const currentTime = new Date()

    const newNotif: Notif = {
      id:
        currentTime.getHours().toString() +
        currentTime.getMinutes().toString() +
        currentTime.getSeconds().toString() +
        currentTime.getMilliseconds().toString(),
      info,
      screenTime: readingTimeInMs(info.text || '...'),
    }

    set(state => ({ notifs: [...state.notifs, newNotif] }))
  },

  notifs_dequeue: () => {
    get().notifs.shift()

    set(() => ({ notifs: [...get().notifs] }))
  },

  notifs_reset: () => set({ notifs: DEFAULT_STATE }),
})
