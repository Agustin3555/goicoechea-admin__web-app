import { ReactNode } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const AnimateState = ({
  state,
  animationClass = 'fade',
  children,
}: {
  state: boolean | number | string
  animationClass?: string
  children: ReactNode
}) => (
  <SwitchTransition>
    <CSSTransition
      key={String(state)}
      classNames={animationClass}
      addEndListener={(node, done) =>
        node.addEventListener('transitionend', done, false)
      }
    >
      {children}
    </CSSTransition>
  </SwitchTransition>
)

export default AnimateState
