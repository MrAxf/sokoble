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
  }, [])

  return (
    <>
      <div className="w-full min-w-[200px] aspect-square bg-primary-light rounded-xl border-8 border-primary-main relative overflow-hidden">
        <motion.div
          animate={playerControls}
          className="w-1/2 aspect-square rounded-full bg-player absolute"
        ></motion.div>
        <motion.div
          animate={boxControls}
          className="w-1/2 aspect-square rounded-md bg-box-primary absolute"
        >
          <div className="w-1/2 transition rounded-sm bg-box-secondary aspect-square m-[25%]"></div>
        </motion.div>
      </div>
      <span className='text-center mt-3 text-lg'>Cargando...</span>
    </>
  )
}
