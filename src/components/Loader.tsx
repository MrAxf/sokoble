import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

import tailwindData from '../utils/tailwindData'

export default function Loader() {
  const waveControls = useAnimation()

  useEffect(() => {
    waveControls.start({
      y: [0, 1, 0],
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative w-full min-w-[200px] flex flex-col">
      <svg
        width={5}
        height={2}
        viewBox="0 0 5 2"
        className="min-h-[100px] w-full"
      >
        <motion.g
          animate={waveControls}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'easeInOut',
          }}
        >
          <rect
            width="1"
            height="1"
            rx="0.3"
            ry="0.3"
            x="0"
            y="0"
            fill={tailwindData.theme.colors['box'].primary}
          ></rect>
          <rect
            width="0.5"
            height="0.5"
            rx="0.15"
            ry="0.15"
            x="0.25"
            y="0.25"
            fill={tailwindData.theme.colors['box'].secondary}
          ></rect>
        </motion.g>
        <motion.g
          animate={waveControls}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        >
          <rect
            width="1"
            height="1"
            rx="0.3"
            ry="0.3"
            x="1"
            y="0"
            fill={tailwindData.theme.colors['box'].success.primary}
          ></rect>
          <rect
            width="0.5"
            height="0.5"
            rx="0.15"
            ry="0.15"
            x="1.25"
            y="0.25"
            fill={tailwindData.theme.colors['box'].success.secondary}
          ></rect>
        </motion.g>
        <motion.circle
          fill={tailwindData.theme.colors['player']}
          r="0.5"
          cx="2.5"
          cy="0.5"
          animate={waveControls}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'easeInOut',
            delay: 0.4,
          }}
        ></motion.circle>
        <motion.g
          animate={waveControls}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'easeInOut',
            delay: 0.6,
          }}
        >
          <rect
            width="1"
            height="1"
            rx="0.3"
            ry="0.3"
            x="3"
            y="0"
            fill={tailwindData.theme.colors['box'].primary}
          ></rect>
          <rect
            width="0.5"
            height="0.5"
            rx="0.15"
            ry="0.15"
            x="3.25"
            y="0.25"
            fill={tailwindData.theme.colors['box'].secondary}
          ></rect>
        </motion.g>
        <motion.g
          animate={waveControls}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'easeInOut',
            delay: 0.8,
          }}
        >
          <rect
            width="1"
            height="1"
            rx="0.3"
            ry="0.3"
            x="4"
            y="0"
            fill={tailwindData.theme.colors['box'].success.primary}
          ></rect>
          <rect
            width="0.5"
            height="0.5"
            rx="0.15"
            ry="0.15"
            x="4.25"
            y="0.25"
            fill={tailwindData.theme.colors['box'].success.secondary}
          ></rect>
        </motion.g>
      </svg>
      <span className="mt-3 text-center text-lg">Cargando...</span>
    </div>
  )
}
