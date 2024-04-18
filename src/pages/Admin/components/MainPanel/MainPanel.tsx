import './MainPanel.css'
import { Fragment, ReactNode } from 'react'
import { Icon } from '@/components'
import { Switcher } from '@/pages/Admin/components'
import { ToggleAdvancedPanel, ToggleNav, ViewSelector } from './components'
import {
  Categories,
  Manufacturers,
  Me,
  Offers,
  Products,
  Sales,
  Users,
} from './modules'
import { useAppStore } from '@/store'
import {
  ALLOWED_SECTIONS,
  CATEGORY_VIEW_KEYS,
  MANUFACTURER_VIEW_KEYS,
  ME_VIEW_KEYS,
  OFFER_VIEW_KEYS,
  PRODUCT_VIEW_KEYS,
  SALE_VIEW_KEYS,
  SECTIONS,
  SectionKeys,
  USER_VIEW_KEYS,
} from '@/constants'

import { UserModel } from '@/models'

const VIEWS: Record<SectionKeys, Record<string, ReactNode>[]> = {
  [SectionKeys.SALES]: {
    [SALE_VIEW_KEYS.view]: <Sales.View />,
  },
  [SectionKeys.OFFERS]: {
    [OFFER_VIEW_KEYS.view]: <Offers.View />,
  },
  [SectionKeys.PRODUCTS]: {
    [PRODUCT_VIEW_KEYS.new]: <Products.New />,
    [PRODUCT_VIEW_KEYS.search]: <Products.Search />,
  },
  [SectionKeys.MANUFACTURERS]: {
    [MANUFACTURER_VIEW_KEYS.view]: <Manufacturers.View />,
  },
  [SectionKeys.CATEGORIES]: {
    [CATEGORY_VIEW_KEYS.view]: <Categories.View />,
  },
  [SectionKeys.USERS]: {
    [USER_VIEW_KEYS.view]: <Users.View />,
  },
  [SectionKeys.ME]: {
    [ME_VIEW_KEYS.profile]: <Me.Profile />,
  },
}

const MainPanel = () => {
  const { role } = useAppStore(store => store.authUser as UserModel.FullData)
  const activeViews = useAppStore(store => store.activeViews)

  const showNav = useAppStore(store => store.showNav)
  const showAdvancedPanel = useAppStore(store => store.showAdvancedPanel)

  const sections = [
    ...Object.keys(ALLOWED_SECTIONS[role].top),
    ...Object.keys(ALLOWED_SECTIONS[role].bot),
  ] as SectionKeys[]

  const sectionActiveIndex = useAppStore(store =>
    sections.indexOf(store.sectionActive)
  )

  return (
    <div
      className="main-panel"
      data-show-nav={showNav}
      data-show-advanced-panel={showAdvancedPanel}
    >
      <div className="top">
        <ToggleNav />
        <header className="glass">
          <Switcher activeIndex={sectionActiveIndex}>
            {sections.map(section => {
              const info = SECTIONS[section]

              return (
                <div className="item" key={section}>
                  <div className="title">
                    <Icon faIcon={info.faIcon} />
                    <h1>{info.title}</h1>
                  </div>
                  <ViewSelector sectionKey={section} />
                </div>
              )
            })}
          </Switcher>
        </header>
        <ToggleAdvancedPanel />
      </div>
      <main className="glass">
        <Switcher activeIndex={sectionActiveIndex}>
          {sections.map(section => (
            <div key={section}>
              <Switcher
                activeIndex={Object.keys(VIEWS[section]).indexOf(
                  activeViews[section]
                )}
              >
                {Object.values(VIEWS[section]).map((view, index) => (
                  <Fragment key={`${section}-${index}`}>{view}</Fragment>
                ))}
              </Switcher>
            </div>
          ))}
        </Switcher>
      </main>
    </div>
  )
}

export default MainPanel
