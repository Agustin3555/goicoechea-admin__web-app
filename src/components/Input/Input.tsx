import './Input.css'
import { InputHTMLAttributes } from 'react'
import { classList } from '../../helpers/classList.helper'

interface Props {
  id: string
  title: string
  showLabel?: boolean
  extraAttrs?: InputHTMLAttributes<HTMLInputElement>
  handlingClass?: string
}

const Input = ({
  id,
  title,
  showLabel = true,
  extraAttrs,
  handlingClass,
}: Props) => (
  <div className={classList('input', handlingClass)}>
    {showLabel && <label htmlFor={id}>{title}</label>}
    <input id={id} title={title} name={id} {...extraAttrs} />
  </div>
)

export default Input
