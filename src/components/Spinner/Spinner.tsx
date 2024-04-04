import './Spinner.css'
import { classList } from '../../helpers/classList.helper'

interface SpinnerStyle {
  size: 's' | 'm'
  color: 'a' | 'b'
}

const Spinner = ({
  style = { size: 's', color: 'a' },
}: {
  style?: SpinnerStyle
}) => (
  <span
    className={classList(
      'spinner',
      `spinner--size-${style.size}`,
      `spinner--color-${style.color}`
    )}
  />
)

export default Spinner
