import { MouseEvent, ReactNode, TouchEvent, useEffect, useRef } from 'react'
import isTouchAviable from '../utils/isTouchAviable'

interface TickButtonProps {
  children: ReactNode
  onTick: () => void
  interval?: number
  tickTimeout?: number
  className?: string
}

export default function TickButton({
  children,
  onTick,
  interval = 100,
  className = "",
  tickTimeout = 500
}: TickButtonProps) {
  const actionInterval = useRef<number | undefined>()
  const startTimeout = useRef<number | undefined>()
  const tick = useRef(onTick)

  useEffect(() => {
    tick.current = onTick
  }, [onTick])

  const enableMouseTick = (evt: MouseEvent<HTMLButtonElement>) => {
    if(isTouchAviable()) return
    evt.preventDefault()
    if (evt.button === 0 && actionInterval.current == undefined) {
      startTick()
    }
  }

  const enableTouchTick = (evt: TouchEvent<HTMLButtonElement>) => {
    if(!isTouchAviable()) return
    if (actionInterval.current == undefined) {
      startTick()
    }
  }

  const startTick = () => {
    tick.current()
      startTimeout.current = Number(setTimeout(() => {
        actionInterval.current = Number(
          setInterval(() => {
            tick.current()
          }, interval)
        )
      }, tickTimeout))
  }

  const disableTick = () => {
    if (startTimeout.current) {
      clearTimeout(startTimeout.current)
      startTimeout.current = undefined
    }
    if (actionInterval.current) {
      clearInterval(actionInterval.current)
      actionInterval.current = undefined
    }
  }
  return (
    <button
      className={`grid rounded-md text-xl place-content-center bg-se hover:bg-secondary-dark transition text-white ${className}`}
      onMouseDown={enableMouseTick}
      onTouchStart={enableTouchTick}
      onMouseLeave={disableTick}
      onMouseUp={disableTick}
      onTouchEnd={disableTick}
    >
      {children}
    </button>
  )
}
