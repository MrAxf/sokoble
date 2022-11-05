import { motion, useAnimationControls } from 'framer-motion'
import { MouseEvent, ReactNode, TouchEvent, useEffect } from 'react'

import isTouchAviable from '../utils/isTouchAviable'

interface HoldButtonProps {
  onHoldEnded: () => void
  holdTime?: number
  children: ReactNode
  className?: string
  disabled?: boolean
}

export default function HoldButton({
  onHoldEnded,
  holdTime = 2000,
  children,
  className = '',
  disabled = false,
}: HoldButtonProps) {
  const controls = useAnimationControls()

  const onMouseHold = (evt: MouseEvent<HTMLButtonElement>) => {
    if (isTouchAviable()) return
    evt.preventDefault()
    if (evt.button === 0) initHold()
  }

  const onTouchHold = (evt: TouchEvent<HTMLButtonElement>) => {
    if (!isTouchAviable()) return
    evt.stopPropagation()
    initHold()
  }

  const initHold = async () => {
    try {
      await controls.start({
        width: '100%',
        transition: {
          duration: holdTime / 1000,
        },
      })
      onHoldEnded()
      controls.start({
        opacity: 0,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const cancelHold = () => {
    controls.stop()
    controls.set({
      width: '0%',
      opacity: 1,
    })
  }

  return (
    <button
      className={`relative overflow-hidden grid rounded-md text-xl place-content-center bg-secondary-main hover:bg-secondary-dark transition disabled:opacity-50 text-white ${className}`}
      onMouseDown={onMouseHold}
      onTouchStart={onTouchHold}
      onMouseUp={cancelHold}
      onMouseLeave={cancelHold}
      onTouchEnd={cancelHold}
      disabled={disabled}
    >
      <motion.span
        className="absolute h-full bg-secondary-light"
        initial={{ width: '0%' }}
        animate={controls}
      ></motion.span>
      <span className="z-10">{children}</span>
    </button>
  )
}
