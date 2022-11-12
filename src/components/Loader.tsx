import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function Loader() {
  const playerControls = useAnimation()
  const boxControls = useAnimation()

  useEffect(() => {
    playerControls.start({
      x: ['0%', '100%', '100%', '0%', '0%'],
      y: ['0%', '0%', '100%', '100%', '0%'],
      transition: {
        repeat: Infinity,
        duration: 5,
      },
    })
    boxControls.start({
      x: ['100%', '0%', '0%', '100%', '100%'],
      y: ['100%', '100%', '0%', '0%', '100%'],
      transition: {
        repeat: Infinity,
        duration: 5,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="relative aspect-square w-full min-w-[200px] overflow-hidden rounded-xl border-8 border-primary-main bg-primary-light">
        <motion.div
          animate={playerControls}
          className="absolute aspect-square w-1/2 rounded-full bg-player"
        ></motion.div>
        <motion.div
          animate={boxControls}
          className="absolute aspect-square w-1/2 rounded-md bg-box-primary"
        >
          <div className="m-[25%] aspect-square w-1/2 rounded-sm bg-box-secondary transition"></div>
        </motion.div>
      </div>
      <span className="mt-3 text-center text-lg">Cargando...</span>
    </>
  )
}
