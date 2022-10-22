import { motion, useAnimationControls } from 'framer-motion'
import { ReactNode, useEffect } from 'react'

interface HoldButtonProps {
  onHoldEnded: () => void
  holdTime?: number
  children: ReactNode
  className?: string
}

export default function HoldButton({
  onHoldEnded,
  holdTime = 2000,
  children,
  className = '',
}: HoldButtonProps) {
  const controls = useAnimationControls()

  const initHold = async () => {
    await controls.start({
      width: '100%',
      transition: {
        duration: holdTime / 1000
      }
    })
    onHoldEnded()
    controls.start({
      opacity: 0
    })
  }

  const cancelHold = () => {
    controls.stop()
    controls.set({
      width: '0%',
      opacity: 1
    })
  }

  return (
    <button
      className={`relative overflow-hidden grid rounded-md text-xl place-content-center bg-green-500 hover:bg-green-700 transition text-white ${className}`}
      onMouseDown={initHold}
      onMouseUp={cancelHold}
      onMouseLeave={cancelHold}
    >
      <motion.span
        className="absolute h-full bg-blue-500"
        initial={{ width: '0%' }}
        animate={controls}
      ></motion.span>
      <span className='z-10'>{children}</span>
    </button>
  )
}
