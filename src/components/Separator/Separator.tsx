import './Separator.css'
import { HTMLAttributes } from 'react'
import { classList } from '../../helpers/classList.helper'

interface Props {
  asSpan?: boolean
  style?: { invert: boolean }
  handlingClass?: string
}

const Separator = ({
  asSpan = true,
  style = { invert: false },
  handlingClass,
}: Props) => {
  const props: HTMLAttributes<HTMLElement> = {
    className: classList(
      'separator',
      { 'separator--inverted': style.invert },
      handlingClass
    ),
  }

  return asSpan ? <span {...props} /> : <hr {...props} />
}

export default Separator
