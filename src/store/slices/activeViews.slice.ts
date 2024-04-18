import { Slice } from '../slice'
import {
  CATEGORY_VIEW_KEYS,
  MANUFACTURER_VIEW_KEYS,
  ME_VIEW_KEYS,
  OFFER_VIEW_KEYS,
  PRODUCT_VIEW_KEYS,
  SALE_VIEW_KEYS,
  SectionKeys,
  USER_VIEW_KEYS,
} from '@/constants'

type ActiveViews = Partial<Record<SectionKeys, string>>

const DEFAULT_STATE: ActiveViews = {
  [SectionKeys.SALES]: SALE_VIEW_KEYS.view,
  [SectionKeys.OFFERS]: OFFER_VIEW_KEYS.view,
  [SectionKeys.PRODUCTS]: PRODUCT_VIEW_KEYS.search,
  [SectionKeys.MANUFACTURERS]: MANUFACTURER_VIEW_KEYS.view,
  [SectionKeys.CATEGORIES]: CATEGORY_VIEW_KEYS.view,
  [SectionKeys.USERS]: USER_VIEW_KEYS.view,
  [SectionKeys.ME]: ME_VIEW_KEYS.profile,
}

export interface ActiveViewsSlice {
  activeViews: ActiveViews

  activeViews_set: (sectionKey: SectionKeys, viewKey: string) => void
}

export const createActiveViewsSlice: Slice<ActiveViewsSlice> = set => ({
  activeViews: DEFAULT_STATE,

  activeViews_set: (sectionKey, viewKey) =>
    set(get => ({
      activeViews: { ...get.activeViews, ...{ [sectionKey]: viewKey } },
    })),
})
