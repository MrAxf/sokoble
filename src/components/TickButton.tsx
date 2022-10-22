import { MouseEvent, ReactNode, useEffect, useRef } from 'react'

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

  const enableTick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    if (evt.button === 0 && actionInterval.current == undefined) {
      tick.current()
      startTimeout.current = Number(setTimeout(() => {
        actionInterval.current = Number(
          setInterval(() => {
            tick.current()
          }, interval)
        )
      }, tickTimeout))
    }
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
      className={`grid rounded-md text-xl place-content-center bg-green-500 hover:bg-green-700 transition text-white ${className}`}
      onMouseDown={enableTick}
      onMouseLeave={disableTick}
      onMouseUp={disableTick}
    >
      {children}
    </button>
  )
}
