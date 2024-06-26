import { useChildAdjustment, useDarkMode } from '@/hooks'
import { ButtonHTMLAttributes, useEffect, useState } from 'react'
import { ConfirmationButtonStyled } from './ConfirmationButton.styled'
import { sleep } from '@/helpers'
import { AnimateState, Icon, Spinner } from '..'

export enum STATUS {
  init,
  loading,
  success,
  error,
}

// TODO: tiene fallos en las animaciones

const ConfirmationButton = ({
  title,
  text,
  faIcon,
  trigger,
  style,
  extraAttrs,
}: {
  title: string
  text?: string
  faIcon?: string
  trigger: () => Promise<boolean>
  style: ConfirmationButtonStyled.Props
  extraAttrs?: ButtonHTMLAttributes<HTMLButtonElement>
}) => {
  const darkMode = useDarkMode()
  const [status, setStatus] = useState<STATUS>(STATUS.init)

  // TODO: trato de que el boton siempre tenga en mismo ancho
  const { childRef, childWidth } = useChildAdjustment()
  const [contentWidth, setContentWidth] = useState(0)

  useEffect(() => {
    if (childWidth !== 0 && childWidth !== contentWidth)
      setContentWidth(childWidth)
  }, [childWidth])

  let timerRef: NodeJS.Timeout

  const handleMouseDown = () => {
    timerRef = setTimeout(async () => {
      setStatus(STATUS.loading)

      await sleep(1000)

      setStatus((await trigger()) ? STATUS.success : STATUS.error)

      await sleep(2000)

      setStatus(STATUS.init)
    }, 2000)
  }

  const handleMouseUp = () => {
    clearTimeout(timerRef)
  }

  const componentsByStatus = {
    [STATUS.init]: (
      <>
        {faIcon && <Icon faIcon={faIcon} style={{ size: style.fontSize }} />}
        {text && <span className="text">{text}</span>}
      </>
    ),
    [STATUS.loading]: <Spinner />,
    [STATUS.success]: (
      <Icon faIcon="fa-solid fa-check" style={{ size: style.fontSize }} />
    ),
    [STATUS.error]: (
      <Icon faIcon="fa-solid fa-xmark" style={{ size: style.fontSize }} />
    ),
  }

  return (
    <ConfirmationButtonStyled.Component
      p={ConfirmationButtonStyled.adapter(style, darkMode, status)}
      title={title}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={status !== STATUS.init}
      {...extraAttrs}
    >
      <div className="loader-C">
        <div className="loader" />
      </div>
      <AnimateState state={String(status)}>
        <div className="confirmation-button-AC" ref={childRef}>
          {componentsByStatus[status]}
        </div>
      </AnimateState>
    </ConfirmationButtonStyled.Component>
  )
}

export default ConfirmationButton
