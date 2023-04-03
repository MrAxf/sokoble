import { useAnimate, AnimationPlaybackControls } from 'framer-motion'
import { MouseEvent, ReactNode, TouchEvent, useEffect, useMemo, useRef } from 'react'

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
  const [scope, animate] = useAnimate()
  const controls = useRef<AnimationPlaybackControls>()

  useEffect(() => {
    if (disabled) cancelHold()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled])

  const colors = useMemo(() => {
    return {
      secondary: {
        dark: 'hover:bg-secondary-dark',
        main: 'bg-secondary-main',
        light: 'bg-secondary-light',
      },
      danger: {
        dark: 'hover:bg-danger-dark',
        main: 'bg-danger-main',
        light: 'bg-danger-light',
      },
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
      controls.current = animate(scope.current, {
        width: '100%',
        opacity: 1,
      }, {
        duration: holdTime / 1000,
        
        onComplete: () => {
          onHoldEnded()
          animate(scope.current, {
            opacity: 0,
          }, {
            duration: .5
          })
        },
      })
      controls.current.play();
  }

  const cancelHold = () => {
    controls.current.stop()
    controls.current.cancel()
    animate(scope.current, {
      opacity: 0,
      width: 0
    }, {
      duration: .1
    })
  }

  const ifNotDisabled = (cb) => (disabled ? () => {} : cb)

  return (
    <button
      className={`relative grid place-content-center overflow-hidden rounded-md text-xl text-white transition disabled:opacity-50 ${className} ${colors.main} ${colors.dark}`}
      onMouseDown={ifNotDisabled(onMouseHold)}
      onTouchStart={ifNotDisabled(onTouchHold)}
      onMouseUp={ifNotDisabled(cancelHold)}
      onMouseLeave={ifNotDisabled(cancelHold)}
      onTouchEnd={ifNotDisabled(cancelHold)}
      disabled={disabled}
    >
      <span
        className={`absolute h-full ${colors.light}`}
        ref={scope}
      ></span>
      <span className="z-10">{children}</span>
    </button>
  )
}
