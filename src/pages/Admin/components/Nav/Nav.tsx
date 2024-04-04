import './Nav.css'
import { SectionButton } from './components'
import { useAppStore } from '@/store'
import { UserModel } from '@/models'
import { SECTION_KEYS } from '@/pages/Admin/helpers'

// TODO: En un futuro se podria obtener esto de la API para mantener una consistente
const ALLOWED_SECTIONS: Record<UserModel.UserRole, SECTION_KEYS[]> = {
  [UserModel.UserRole.EMPLOYEE]: [
    SECTION_KEYS.sales,
    SECTION_KEYS.offers,
    SECTION_KEYS.products,
    SECTION_KEYS.manufacturers,
    SECTION_KEYS.categories,
  ],
  [UserModel.UserRole.ADMIN]: [
    SECTION_KEYS.sales,
    SECTION_KEYS.offers,
    SECTION_KEYS.products,
    SECTION_KEYS.manufacturers,
    SECTION_KEYS.categories,
    SECTION_KEYS.users,
  ],
}

const Nav = () => {
  const { role } = useAppStore(state => state.authUser as UserModel.FullData)

  return (
    <nav className="glass">
      <div>
        <ul className="top">
          {ALLOWED_SECTIONS[role].map(item => (
            <li key={item}>
              <SectionButton sectionKey={item} />
            </li>
          ))}
        </ul>
        <ul className="bot">
          <li key={SECTION_KEYS.me}>
            <SectionButton sectionKey={SECTION_KEYS.me} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
