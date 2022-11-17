import { motion, useAnimationControls } from 'framer-motion'
import { MouseEvent, ReactNode, TouchEvent, useEffect, useMemo } from 'react'

import isTouchAviable from '../utils/isTouchAviable'

interface HoldButtonProps {
  onHoldEnded: () => void
  holdTime?: number
  children: ReactNode
  className?: string
  disabled?: boolean
  theme?: 'secondary' | 'danger'
}

export default function HoldButton({
  onHoldEnded,
  holdTime = 2000,
  children,
  className = '',
  disabled = false,
  theme = 'secondary',
}: HoldButtonProps) {
  const controls = useAnimationControls()

  useEffect(() => {
    if (disabled) cancelHold()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled])

  const colors = useMemo(() => {
    return {
      secondary: {
        dark: "hover:bg-secondary-dark",
        main: "bg-secondary-main",
        light: "bg-secondary-light",
      },
      danger: {
        dark: "hover:bg-danger-dark",
        main: "bg-danger-main",
        light: "bg-danger-light",
      }
    }[theme]
  }, [theme])

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

  const ifNotDisabled = (cb) => (disabled ? () => {} : cb)

  return (
    <button
      className={`relative grid place-content-center overflow-hidden rounded-md  text-xl text-white transition disabled:opacity-50 ${className} ${colors.main} ${colors.dark}`}
      onMouseDown={ifNotDisabled(onMouseHold)}
      onTouchStart={ifNotDisabled(onTouchHold)}
      onMouseUp={ifNotDisabled(cancelHold)}
      onMouseLeave={ifNotDisabled(cancelHold)}
      onTouchEnd={ifNotDisabled(cancelHold)}
      disabled={disabled}
    >
      <motion.span
        className={`absolute h-full ${colors.light}`}
        initial={{ width: '0%' }}
        animate={controls}
      ></motion.span>
      <span className="z-10">{children}</span>
    </button>
  )
}
