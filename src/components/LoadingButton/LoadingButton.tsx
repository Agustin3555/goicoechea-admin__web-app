import './LoadingButton.css'
import {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { AnimateState, Icon, Spinner } from '..'

export enum LoadingButtonState {
  READY,
  LOADING,
  SUCCESS,
  ERROR,
}

const LoadingButton = ({
  title,
  faIcon,
  state,
  style,
  extraAttrs,
  handleClick,
}: {
  title: string
  faIcon: string
  state: LoadingButtonState
  style?: ButtonStyled.Props
  extraAttrs?: ButtonHTMLAttributes<HTMLButtonElement>
  handleClick?: MouseEventHandler<HTMLButtonElement>
}) => {
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setDisabled(state !== LoadingButtonState.READY)
  }, [state])

  const componentByState: Record<LoadingButtonState, ReactNode> = {
    [LoadingButtonState.READY]: (
      <>
        <Icon faIcon={faIcon} />
        <p>Acceder</p>
      </>
    ),
    [LoadingButtonState.LOADING]: <Spinner />,
    [LoadingButtonState.SUCCESS]: <Icon faIcon="fa-solid fa-check" />,
    [LoadingButtonState.ERROR]: <Icon faIcon="fa-solid fa-xmark" />,
  }

  return (
    <button
      className="loading-button"
      title={title}
      disabled={disabled}
      onClick={handleClick}
      {...extraAttrs}
    >
      <AnimateState state={state}>
        <div className="content">{componentByState[state]}</div>
      </AnimateState>
    </button>
  )
}

export default LoadingButton
