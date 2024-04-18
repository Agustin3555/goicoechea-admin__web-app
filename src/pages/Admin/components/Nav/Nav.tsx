import './Nav.css'
import { SectionButton } from './components'
import { useAppStore } from '@/store'
import { ALLOWED_SECTIONS, SectionKeys } from '@/constants'

import { UserModel } from '@/models'

const Nav = () => {
  const { role } = useAppStore(store => store.authUser as UserModel.FullData)
  const showNav = useAppStore(store => store.showNav)

  return (
    <nav data-open={showNav}>
      <ul className="top">
        {(Object.keys(ALLOWED_SECTIONS[role].top) as SectionKeys[]).map(
          item => (
            <li key={item}>
              <SectionButton sectionKey={item} />
            </li>
          )
        )}
      </ul>
      <ul className="bot">
        {(Object.keys(ALLOWED_SECTIONS[role].bot) as SectionKeys[]).map(
          item => (
            <li key={item}>
              <SectionButton sectionKey={item} />
            </li>
          )
        )}
      </ul>
    </nav>
  )
}

export default Nav
