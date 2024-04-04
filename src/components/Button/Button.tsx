import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'
import { ButtonStyled } from './Button.styled'

const Button = ({
  title,
  style,
  extraAttrs,
  handleClick,
  children,
}: {
  title: string
  style: ButtonStyled.Props
  extraAttrs?: ButtonHTMLAttributes<HTMLButtonElement>
  handleClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode | ReactNode[]
}) => (
  <button title={title} onClick={handleClick} {...extraAttrs}>
    {children}
  </button>
)

export default Button
