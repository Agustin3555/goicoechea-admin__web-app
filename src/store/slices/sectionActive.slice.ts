import { Slice } from '../slice'
import { SectionKeys } from '@/constants'
import { sectionActiveEntity } from '@/services'

const DEFAULT_STATE: SectionKeys = SectionKeys.ME

export interface SectionActiveSlice {
  sectionActive: SectionKeys

  sectionActive_set: (key: SectionKeys) => void
}

export const createSectionActiveSlice: Slice<SectionActiveSlice> = set => {
  let sectionActive

  const value = sectionActiveEntity.get()

  if (value !== null) {
    // Si existe la entidad en local storage, se la utiliza
    sectionActive = value
  } else {
    // Si no, se crea la entidad en local storage y se la utiliza
    sectionActiveEntity.set(DEFAULT_STATE)
    sectionActive = DEFAULT_STATE
  }

  return {
    sectionActive,

    sectionActive_set: key => {
      sectionActiveEntity.set(key)
      set(() => ({ sectionActive: key }))
    },
  }
}
